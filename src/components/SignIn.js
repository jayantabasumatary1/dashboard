import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Signin.css"


const theme = createTheme();

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div className='box-container'>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />

                    <Box
                        sx={{

                            color: '#fff',
                            marginTop: '2',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Box component="form" onSubmit={handleSubmit} noValidate sx=
                            {{
                                mt: 8,
                                mb: 10
                            }}>
                            <TextField
                                variant='filled'
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Employee ID"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                InputLabelProps={{
                                    style: { color: '#fff' }
                                }}
                                sx={{
                                    input: {
                                        color: 'white',
                                    }
                                }}


                            />
                            <TextField
                                variant='filled'
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                InputLabelProps={{
                                    style: { color: '#fff' }
                                }}
                                sx={{
                                    input: { color: 'white' }


                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 4, mb: 2 }}
                            >
                                Sign In
                            </Button>
                        </Box>
                        <box>
                            <Link href="#" variant="body2" underline='hover' color='inherit'>
                                Forgot password?
                            </Link>

                        </box>
                        <box>
                            <Link href="#" variant="body2" underline='hover' color='inherit'>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div >
    );
}