const images = Object.values(import.meta.glob("./*.(png|jpg|jpeg|svg)", { eager: true }))
    .map((img) => (img as { default: string }).default);

export default images;