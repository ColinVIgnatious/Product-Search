import { useState } from 'react';
import {  Form, Row, Col, Card } from 'react-bootstrap';
import './App.css';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const productsData = [
  { productNo: 1, productType: 'Electronics', inStock: 10, price: 299 },
  { productNo: 2, productType: 'Clothing', inStock: 5, price: 49 },
  { productNo: 3, productType: 'Groceries', inStock: 20, price: 2 },
  { productNo: 4, productType: 'Furniture', inStock: 3, price: 499 },
  { productNo: 5, productType: 'Toys', inStock: 15, price: 29 },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = productsData.filter(product =>
    product.productType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Product Search</h1>
      <Form>
        <Form.Group as={Row} controlId="formSearch">
          <Form.Label column xs={12} sm={2}>Search</Form.Label>
          <Col xs={12} sm={10}>
            <Form.Control
              type="text"
              placeholder="Search by product type"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Col>
        </Form.Group>
      </Form>

      <div className="d-none d-md-block">
      <TableContainer>
  <Table variant='simple'>
    <TableCaption>Product Search</TableCaption>
    <Thead>
      <Tr>
        <Th>Product No</Th>
        <Th>Product Type</Th>
        <Th isNumeric>In Stock</Th>
        <Th isNumeric>Price</Th>
      </Tr>
    </Thead>
    <Tbody>     
      {filteredProducts.map(product => (
              <Tr key={product.productNo}>
                <Td>{product.productNo}</Td>
                <Td>{product.productType}</Td>
                <Td>{product.inStock}</Td>
                <Td>{product.price}</Td>
              </Tr>
            ))}
      </Tbody>    
  </Table>
</TableContainer>
</div>
    
      <div className="d-block d-md-none">
        {filteredProducts.map(product => (
          <Card className="mb-3" key={product.productNo}>
            <Card.Body>
              <Card.Title>{product.productType}</Card.Title>
              <Card.Text>
                <strong>Product No:</strong> {product.productNo} <br />
                <strong>In Stock:</strong> {product.inStock} <br />
                <strong>Price:</strong> ${product.price}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;

