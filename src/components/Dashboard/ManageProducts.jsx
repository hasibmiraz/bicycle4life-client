import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Title from '../Title/Title';
import DeleteAdminProduct from './DeleteAdminProduct';
import ProductsRow from './ProductsRow';

const ManageProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery('admin-products', () =>
    fetch(`https://stark-basin-34233.herokuapp.com/part/admin`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) return <Loading />;
  return (
    <div>
      <Title title="Manage Product" />
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Product</th>
              <th>Minimum Order Quantity</th>
              <th>Available Quantity</th>
              <th>Unit Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {products.map((product) => (
              <ProductsRow
                key={product._id}
                product={product}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <DeleteAdminProduct
          deletingProduct={deletingProduct}
          setDeletingProduct={setDeletingProduct}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageProducts;
