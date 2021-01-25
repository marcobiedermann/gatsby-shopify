import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import Button from '../Button';
import Image from '../Image';
import Label from '../Label';
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
  vendor: string;
}

const Product: FC<ProductProps> = (props) => {
  const { description, images, options, tags, title, vendor } = props;

  return (
    <div className={styles.product}>
      <div style={{ width: '50%' }}>
        <ul className={styles.product__images}>
          {images.map((image) => (
            <li key={image.id}>
              <Image className={styles.product__image} src={image.originalSrc} alt={title} />
            </li>
          ))}
        </ul>
      </div>
      <div style={{ paddingLeft: '6em', paddingRight: '6em', width: '50%' }}>
        <h1 className={styles.product__title}>{title}</h1>
        <h2>by {vendor}</h2>
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
                <div className="form__field" key={option.shopifyId}>
                  <Label htmlFor={option.name}>{option.name}</Label>
                  <Field className="form__input" as="select" name={option.name} id={option.name}>
                    {option.values.map((value) => (
                      <option key={`${option.name}-${value}`} value={value}>
                        {value}
                      </option>
                    ))}
                  </Field>
                </div>
              ))}
              <div className="form__field">
                <Label htmlFor="quantity">Quantity</Label>
                <Field
                  className="form__input"
                  id="quantity"
                  min="1"
                  name="quantity"
                  step="1"
                  type="number"
                />
              </div>
              <div className="form__field">
                <Button type="submit" disabled={isSubmitting}>
                  Add to cart
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Product;
