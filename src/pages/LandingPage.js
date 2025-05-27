import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const products = [
    { title: 'Smartphone A', description: 'High performance mobile' },
    { title: 'Earbuds Pro', description: 'Noise-cancelling earbuds' },
    { title: 'Wireless Charger', description: 'Fast charging pad' },
];

function LandingPage() {
    return (
        <Container className="landing">
            <Typography variant="h4" gutterBottom>Our Products</Typography>
            <Grid container spacing={2}>
                {products.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="product-card">
                            <CardContent>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body2">{item.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default LandingPage;