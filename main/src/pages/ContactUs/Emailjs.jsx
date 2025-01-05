import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import emailjs from "@emailjs/browser"

const Emailjs = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  
  // Use environment variables
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      })
    }
  }

  const validateForm = () => {
    const { name, phone, email, message } = form
    const newErrors = {}

    if (!name || name === "") newErrors.name = "Please enter your name."
    if (!phone || phone === "") newErrors.phone = "Please enter your phone number."
    if (!email || email === "") newErrors.email = "Please enter your email address."
    if (!message || message === "") newErrors.message = "Please enter a message to send to us."

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
        .then((res) => {
          // Reset form
          setForm({
            name: "",
            phone: "",
            email: "",
            message: ""
          })
          console.log("Email sent successfully:", res)
        })
        .catch((err) => console.error("Failed to send email:", err))
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            value={form.message}
            onChange={(e) => setField("message", e.target.value)}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Emailjs