import { ApplicationInsights } from "@microsoft/applicationinsights-web";

export const appInsights = new ApplicationInsights({
    config: {
        connectionString: import.meta.env.VITE_APP_INSIGHTS_CONNECTION_STRING
    }
});
