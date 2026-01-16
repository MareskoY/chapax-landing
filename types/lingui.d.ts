declare module "@lingui/core" {
	export const i18n: {
		load: (locale: string, messages: Record<string, string>) => void;
		activate: (locale: string) => void;
		locale: string;
		_: (id: string, values?: Record<string, unknown>) => string;
	};
}

declare module "@lingui/react" {
	import * as React from "react";
	export const I18nProvider: React.ComponentType<{ i18n: any; forceRenderOnLocaleChange?: boolean; children?: React.ReactNode }>;
	export const Trans: React.ComponentType<{
		id?: string;
		values?: Record<string, unknown>;
		children?: React.ReactNode;
	}>;
	export function useLingui(): { i18n: any };
}


