import { PayPalScriptProvider } from "@paypal/react-paypal-js";
export default function App() {
    return (
        <PayPalScriptProvider options={{ "client-id": "AVMHbhoq5ugxAWgjRLW7ZhDJEL9jOAGIw5TlvRXBCgHEBUhC2xD96nL6nQd-o4wajuw9AP-lSyXZLbbk" }}>
            <!-- start to use the PayPal JS SDK script, e.g. use the "PayPalButtons" component -->
        </PayPalScriptProvider>
    );
}
