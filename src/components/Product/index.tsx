import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import Image from '../Image';
import Tags from '../Tags';
import styles from './style.module.css';

interface Image {
  id: string;
  originalSrc: string;
}

interface Option {
  name: string;
  shopifyId: string;
  values: string[];
}

export interface ProductProps {
  availableForSale: boolean;
  description: string;
  handle: string;
  images: Image[];
  options: Option[];
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
    maxVariantPrice: {
      amount: string;
    };
  };
  shopifyId: string;
  tags: string[];
  title: string;
}

const Product: FC<ProductProps> = (props) => {
  const { description, images, options, tags, title } = props;

  return (
    <div className={styles.product}>
      <div>
        <ul className={styles.product__images}>
          {images.map((image) => (
            <li key={image.id}>
              <Image className={styles.product__image} src={image.originalSrc} alt={title} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={styles.product__title}>{title}</h2>
        <div className={styles.product__description}>
          <p>{description}</p>
        </div>
        <Tags tags={tags} />
        <Formik
          initialValues={{
            quantity: 1,
          }}
          onSubmit={(values, actions) => {
            console.log({ values });
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {options.map((option) => (
                <div key={option.shopifyId}>
                  <label htmlFor={option.name}>{option.name}</label>
                  <Field as="select" name={option.name} id={option.name}>
                    {option.values.map((value) => (
                      <option key={`${option.name}-${value}`} value={value}>
                        {value}
                      </option>
                    ))}
                  </Field>
                </div>
              ))}
              <div>
                <label htmlFor="quantity">Quantity</label>
                <Field id="quantity" name="quantity" />
              </div>
              <div>
                <button type="submit" disabled={isSubmitting}>
                  Check out
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Product;
