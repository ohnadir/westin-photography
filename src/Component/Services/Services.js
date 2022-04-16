import React, { useContext } from 'react';
import { CartContext } from '../../App';
import useServices from '../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    const [cart, setCart] = useContext(CartContext);

    const handleAddToCart = id => {
        let newCart = [];
        const rest = services.find(service => service.id === id);
        newCart = [...cart, rest];
        setCart(newCart);
    }
    return (
        <div className='lg:max-w-5xl md:max-w-3xl mx-auto my-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        handleAddToCart={handleAddToCart}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;