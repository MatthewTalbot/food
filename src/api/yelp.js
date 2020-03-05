import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer hptEikWM5MDY0d9kwbU6_HRdcP9JMa8vC0KfKspm5a75-YLCjQ_Y54UM40ziHHmzjMErCVf6h1Cx2zrKhY6TQoA3_FjLM-LFWAOHUEUCYZ4HPJLScTbyRNeNQXJeXnYx'
	}
});
