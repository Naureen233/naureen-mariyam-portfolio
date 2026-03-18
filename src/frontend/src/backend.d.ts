import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    getAboutMe(): Promise<string>;
    getSkills(): Promise<Array<string>>;
    greet(name: string): Promise<string>;
}
