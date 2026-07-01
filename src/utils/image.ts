export type ImageSource = string | { src: string } | undefined;

export function imageSrc(image: ImageSource) {
	return typeof image === "string" ? image : image?.src;
}
