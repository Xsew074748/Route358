import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';

export default function Index({ auth, products }) {
    return (
        <AuthenticatedLayout>
            <Head title="Products" />
            <div className="product-container">
                <h1 className="title">ร้านอาหาร อีสาน</h1>
                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-price">${product.price}</p>
                            <Link
                                href={`/products/${product.id}`}
                                className="product-link"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
