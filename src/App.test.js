import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

it('Needs to run make an api call on button submit', async () => {
  render(<App/>)
  const form  = screen.getByTestId('apiform')
  const urlField = screen.getByTestId('url')
  fireEvent.change(urlField,{name:'url',value: 'https://pokeapi.co/api/v2/pokemon'})
  
});

test('renders title',()=>{
  render(<App/>); 
  const titleElement = screen.getByText('RESTy')
expect(titleElement).toBeInTheDocument();
});

test('renders navbar',()=>{
  render(<App/>); 
  const titleElement = screen.getByText('Home')
expect(titleElement).toBeInTheDocument();
});

test('renders NavLink',()=>{
  render(<App/>); 
  const titleElement = screen.getByText('History')
expect(titleElement).toBeInTheDocument();
});


test('renders navLink',()=>{
  render(<App/>); 
  const titleElement = screen.getByText('Help')
expect(titleElement).toBeInTheDocument();
});

test('renders footer',()=>{
  render(<App/>); 
  const titleElement = screen.getByTestId('footer')
expect(titleElement).toBeInTheDocument();
})


