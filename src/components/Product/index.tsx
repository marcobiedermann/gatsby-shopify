import { Field, Form, Formik } from "formik"
import React, { FC } from "react"

interface Image {
  id: string
  originalSrc: string
}

interface Option {
  name: string
  shopifyId: string
  values: string[]
}

export interface ProductProps {
  availableForSale: boolean
  description: string
  handle: string
  images: Image[]
  options: Option[]
  priceRange: {
    minVariantPrice: {
      amount: string
    }
    maxVariantPrice: {
      amount: string
    }
  }
  shopifyId: string
  title: string
}

const Product: FC<ProductProps> = props => {
  const { description, images, options, title } = props

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <img src={image.originalSrc} alt={title} />
          </li>
        ))}
      </ul>
      <Formik
        initialValues={{
          quantity: 1,
        }}
        onSubmit={(values, actions) => {
          console.log({ values })
          actions.setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {options.map(option => (
              <div key={option.shopifyId}>
                <label htmlFor={option.name}>{option.name}</label>
                <Field as="select" name={option.name} id={option.name}>
                  {option.values.map(value => (
                    <option key={`${name}-${value}`} value={value}>
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
  )
}

export default Product
