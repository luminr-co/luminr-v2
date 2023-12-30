
export default interface PricingEntity{
    title: string,
    subTitle: string,
    features: Array<String>,
    variant?: 'orange' | 'white',
    height?: 'primary' | 'secondary',
}