import React, { useRef, useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';


const ContactForm = ({ id }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null); // 'up' або 'down'
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');
  
    useEffect(() => {
      let lastScrollY = window.scrollY;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          const currentScrollY = window.scrollY;
          const direction = currentScrollY > lastScrollY ? 'down' : 'up';
          setScrollDirection(direction);
  
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
  
          lastScrollY = currentScrollY;
        },
        { threshold: 0.5 } // Точка активації анімації
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmissionMessage('');
  
      try {
        // Замінити URL на ваш endpoint для обробки форми
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setSubmissionMessage('Your message was sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmissionMessage('Failed to send your message. Please try again later.');
        }
      } catch (error) {
        setSubmissionMessage('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <Box
        id={id}
        ref={sectionRef}
        className={`${isVisible ? 'animate-visible' : scrollDirection === 'down' ? 'animate-exit-down' : 'animate-exit-up'}`}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          p: 2,
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >

<Typography variant="h4" component="h1" gutterBottom>
        Contact Form
      </Typography>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', width: '100%' }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
            sx={{ mt: 2 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {submissionMessage && (
            <Typography color={submissionMessage.includes('successfully') ? 'green' : 'red'} sx={{ mt: 2 }}>
              {submissionMessage}
            </Typography>
          )}
        </form>
      </Box>
    );
  };
  
  export default ContactForm;
  