// Types for the kit's effects runtime, vendored unchanged in ./node_modules/taste-fx (tasteskill assets/effects).
// It sits under a node_modules folder so the project's ESLint (which flags the kit's useFallback() as a React
// hook) leaves the kit's code as shipped; the page imports it as "taste-fx".
declare module "taste-fx" {
  export type FxPalette = { bg: string; surface?: string; ink: string; muted?: string; accent: string; accentInk?: string };
  export type FxController = { pause(): void; resume(): void; destroy(): void };
  type FxEffect = { id: string };
  const fx: {
    mount(
      el: HTMLElement,
      effect: FxEffect | string,
      opts?: { palette?: FxPalette; params?: Record<string, number>; seed?: number | string },
    ): Promise<FxController>;
  };
  export default fx;
}

declare module "taste-fx/painterly-landscape" {
  const effect: { id: string };
  export default effect;
}
