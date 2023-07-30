const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);
export default async(req,res)=>{

    const {items,email}=req.body;
    console.log(email);

    const transformedItems= items.map(item=>({
        quantity:1,
        price_data:{
            currency:'gbp',
            unit_amount: item.price*100,
            product_data:{
                name: item.title,
                description: item.description,
                images:[item.image]
            },
        },
    }));

    const session =await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        
        shipping_address_collection:{
         allowed_countries: ["GB","US","CA"]
        },
        line_items:transformedItems,
        mode:'payment',
        success_url: "https://buy.stripe.com/test_00g3fN45j2DR0kUfYY",
        cancel_url:`${process.env.HOST}/cancel`,
        metadata:{
            email,
            images:JSON.stringify(items.map(item =>item.image))
        }
    })

    res.status(200).json({id: session.id});


};