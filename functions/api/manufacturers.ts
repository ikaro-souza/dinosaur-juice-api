import { EventContext } from "@cloudflare/workers-types";

export const onRequestGet = (context: EventContext<any, any, any>) => {
    const url = new URL(context.request.url);
    const params = url.searchParams;
    return new Response(params.toString());
};
