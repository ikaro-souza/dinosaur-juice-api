import * as dotenv from "dotenv";
import { z } from "zod";
dotenv.config();

/**
 * Specify your server-side environment variables schema here. This way you can ensure the app isn't
 * built with invalid env vars.
 */
const schema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]),
    DB_USER: z.string().nonempty(),
    DB_PASSWORD: z.string().nonempty(),
    DB_HOST: z.string().nonempty(),
    DB_PORT: z.preprocess(
        (str) => parseInt(str as string),
        z.number().int().positive(),
    ),
    DB_NAME: z.string().nonempty(),
    DB_URL: z.string().url().nonempty(),
});
type Env = z.infer<typeof schema>;

const processEnv: Record<keyof z.infer<typeof schema>, string | undefined> = {
    NODE_ENV: process.env.NODE_ENV ?? "development",
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_URL: process.env.DB_URL,
};

let env: Env = processEnv as any;

const skip =
    !!process.env.SKIP_ENV_VALIDATION &&
    process.env.SKIP_ENV_VALIDATION !== "false" &&
    process.env.SKIP_ENV_VALIDATION !== "0";
if (!skip) {
    const parsed = schema.safeParse(processEnv);

    if (parsed.success === false) {
        console.error(
            "❌ Invalid environment variables:",
            parsed.error.flatten().fieldErrors,
        );
        throw new Error("Invalid environment variables");
    }

    env = new Proxy(parsed.data, {
        get(target, prop) {
            if (typeof prop !== "string") return undefined;
            return target[/** @type {keyof typeof target} */ prop];
        },
    }) as any;
}

export { env };
