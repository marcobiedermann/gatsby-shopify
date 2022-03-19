import { Field, Form, Formik } from 'formik';
import React from 'react';
import Button from '../Button';
import Image from '../Image';
import Label from '../Label';
import Tags from '../Tags';
import {
  product,
  product__description,
  product__image,
  product__images,
  product__options,
  product__title,
} from './style.module.css';

interface Source {
  srcSet: string;
  sizes: string;
  type: string;
}

type Layout = 'fixed' | 'fullWidth' | 'constrained';

interface Image {
  altText: string;
  gatsbyImageData: {
    images: {
      sources: Source[];
      fallback: {
        src: string;
        srcSet: string;
        sizes: string;
      };
    };
    layout: Layout;
    width: number;
    height: number;
  };
  id: string;
}

interface Option {
  name: string;
  id: string;
  values: string[];
}

export interface ProductProps {
  description: string;
  handle: string;
  images: Image[];
  options: Option[];
  priceRangeV2: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  shopifyId: string;
  tags: string[];
  title: string;
  vendor: string;
}

function Product(props: ProductProps) {
  const { description, images, options, priceRangeV2, tags, title, vendor } = props;

  return (
    <div className={product}>
      <div style={{ width: '50%' }}>
        <ul className={product__images}>
          {images.map((image) => (
            <li key={image.id}>
              <Image className={product__image} {...image} />
            </li>
          ))}
        </ul>
      </div>
      <div style={{ paddingLeft: '6em', paddingRight: '6em', width: '50%' }}>
        <h1 className={product__title}>{title}</h1>
        <h2>by {vendor}</h2>
        <div>
          {priceRangeV2.minVariantPrice.amount} {priceRangeV2.minVariantPrice.currencyCode}
        </div>
        <div className={product__description}>
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
                <div className="form__field" key={option.id}>
                  {option.values.length > 5 ? (
                    <>
                      <Label htmlFor={option.name}>{option.name}</Label>
                      <Field
                        as="select"
                        className="form__input"
                        id={option.name}
                        name={option.name}
                      >
                        {option.values.map((value) => (
                          <option key={`${option.name}-${value}`} value={value}>
                            {value}
                          </option>
                        ))}
                      </Field>
                    </>
                  ) : (
                    <fieldset>
                      <legend>{option.name}</legend>
                      <div className={product__options}>
                        {option.values.map((value) => (
                          <div key={value}>
                            <Label htmlFor={value}>{value}</Label>
                            <Field type="radio" id={value} name={option.name} value={value} />
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  )}
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
}

export default Product;
