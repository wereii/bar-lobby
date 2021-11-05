declare const __static: string;

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
    export default component;
}

declare module "*.png";
declare module "*.mp3";
declare module "*.mp4";