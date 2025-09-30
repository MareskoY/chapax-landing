declare module "@lingui/core" {
	export const i18n: {
		load: (locale: string, messages: any) => void;
		activate: (locale: string) => void;
		locale: string;
	};
}

declare module "@lingui/react" {
	import * as React from "react";
	export const Trans: React.ComponentType<{ id?: string; children?: React.ReactNode }>;
}


