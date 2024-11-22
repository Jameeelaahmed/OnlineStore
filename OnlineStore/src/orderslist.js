const orders = [
    {
        orderID: 1,
        customerName: "John Doe",
        phoneNumber: "01234567890",
        email: "john.doe@example.com",
        order: [
            { item: "Refrigerator", quantity: 1 }
        ],
        orderDate: "2023-12-10",
        deliveryDate: "2024-01-01",
        deliveryPricing: "200",
        totalPrice: "1200",
        deliveryAddress: "123 Elm St, Qena, Egypt",
        deliveryStatus: "Delivered",
        paymentMethod: "COD",
    },
    {
        orderID: 2,
        customerName: "Jane Smith",
        phoneNumber: "01122334455",
        email: "jane.smith@example.com",
        order: [
            { item: "Microwave", quantity: 2 }
        ],
        orderDate: "2023-12-11",
        deliveryDate: "2023-12-20",
        deliveryPricing: "50",
        totalPrice: "350",
        deliveryAddress: "45 Market St, Cairo, Egypt",
        deliveryStatus: "In Transit",
        paymentMethod: "Credit Card",
    },
    {
        orderID: 3,
        customerName: "Ahmed Ali",
        phoneNumber: "01566778899",
        email: "ahmed.ali@example.com",
        order: [
            { item: "Washing Machine", quantity: 1 },
            { item: "Iron", quantity: 1 }
        ],
        orderDate: "2023-12-12",
        deliveryDate: "2024-01-05",
        deliveryPricing: "150",
        totalPrice: "800",
        deliveryAddress: "678 Nile Ave, Giza, Egypt",
        deliveryStatus: "Pending",
        paymentMethod: "COD",
    },
    {
        orderID: 4,
        customerName: "Fatima Hassan",
        phoneNumber: "01012345678",
        email: "fatima.hassan@example.com",
        order: [
            { item: "Vacuum Cleaner", quantity: 1 },
            { item: "Carpet Shampooer", quantity: 2 }
        ],
        orderDate: "2023-12-08",
        deliveryDate: "2023-12-25",
        deliveryPricing: "75",
        totalPrice: "275",
        deliveryAddress: "32 Palm St, Luxor, Egypt",
        deliveryStatus: "Delivered",
        paymentMethod: "Bank Transfer",
    },
    {
        orderID: 5,
        customerName: "Mohamed Youssef",
        phoneNumber: "01234567891",
        email: "mohamed.youssef@example.com",
        order: [
            { item: "Air Conditioner", quantity: 1 }
        ],
        orderDate: "2023-12-13",
        deliveryDate: "2024-01-15",
        deliveryPricing: "300",
        totalPrice: "2500",
        deliveryAddress: "56 Corniche Rd, Alexandria, Egypt",
        deliveryStatus: "In Transit",
        paymentMethod: "Credit Card",
    },
    {
        orderID: 6,
        customerName: "Aisha Omar",
        phoneNumber: "01098765432",
        email: "aisha.omar@example.com",
        order: [
            { item: "Smart TV", quantity: 1 },
            { item: "Remote Batteries", quantity: 2 }
        ],
        orderDate: "2023-12-14",
        deliveryDate: "2023-12-30",
        deliveryPricing: "100",
        totalPrice: "1500",
        deliveryAddress: "98 Green Ave, Assiut, Egypt",
        deliveryStatus: "Delivered",
        paymentMethod: "COD",
    },
    {
        orderID: 7,
        customerName: "Hassan Ibrahim",
        phoneNumber: "01145678901",
        email: "hassan.ibrahim@example.com",
        order: [
            { item: "Dishwasher", quantity: 1 }
        ],
        orderDate: "2023-12-15",
        deliveryDate: "2024-01-10",
        deliveryPricing: "200",
        totalPrice: "1800",
        deliveryAddress: "12 River St, Minya, Egypt",
        deliveryStatus: "Pending",
        paymentMethod: "Bank Transfer",
    },
    {
        orderID: 8,
        customerName: "Noha Salah",
        phoneNumber: "01056789012",
        email: "noha.salah@example.com",
        order: [
            { item: "Oven", quantity: 1 }
        ],
        orderDate: "2023-12-16",
        deliveryDate: "2024-01-05",
        deliveryPricing: "80",
        totalPrice: "800",
        deliveryAddress: "45 Tahrir Square, Cairo, Egypt",
        deliveryStatus: "Delivered",
        paymentMethod: "Credit Card",
    },

    {
        orderID: 9,
        customerName: "Noha Salah",
        phoneNumber: "01056789012",
        email: "noha.salah@example.com",
        order: [
            { item: "Oven", quantity: 1 }
        ],
        orderDate: "2023-12-16",
        deliveryDate: "2024-01-05",
        deliveryPricing: "80",
        totalPrice: "800",
        deliveryAddress: "45 Tahrir Square, Cairo, Egypt",
        deliveryStatus: "Delivered",
        paymentMethod: "Credit Card",
    },

    {
        orderID: 10,
        customerName: "Noha Salah",
        phoneNumber: "01056789012",
        email: "noha.salah@example.com",
        order: [
            { item: "Oven", quantity: 1 }
        ],
        orderDate: "2023-12-16",
        deliveryDate: "2024-01-05",
        deliveryPricing: "80",
        totalPrice: "800",
        deliveryAddress: "45 Tahrir Square, Cairo, Egypt",
        deliveryStatus: "Delivered",
        paymentMethod: "Credit Card",
    },

    {
        orderID: 10,
        customerName: "Noha Salah",
        phoneNumber: "01056789012",
        email: "noha.salah@example.com",
        order: [
            { item: "Oven", quantity: 1 }
        ],
        orderDate: "2023-12-16",
        deliveryDate: "2024-01-05",
        deliveryPricing: "80",
        totalPrice: "800",
        deliveryAddress: "45 Tahrir Square, Cairo, Egypt",
        deliveryStatus: "Delivered",
        paymentMethod: "Credit Card",
    },

    {
        orderID: 11,
        customerName: "Noha Salah",
        phoneNumber: "01056789012",
        email: "noha.salah@example.com",
        order: [
            { item: "Oven", quantity: 1 }
        ],
        orderDate: "2023-12-16",
        deliveryDate: "2024-01-05",
        deliveryPricing: "80",
        totalPrice: "800",
        deliveryAddress: "45 Tahrir Square, Cairo, Egypt",
        deliveryStatus: "Delivered",
        paymentMethod: "Credit Card",
    },

    {
        orderID: 12,
        customerName: "Noha Salah",
        phoneNumber: "01056789012",
        email: "noha.salah@example.com",
        order: [
            { item: "Oven", quantity: 1 }
        ],
        orderDate: "2023-12-16",
        deliveryDate: "2024-01-05",
        deliveryPricing: "80",
        totalPrice: "800",
        deliveryAddress: "45 Tahrir Square, Cairo, Egypt",
        deliveryStatus: "Delivered",
        paymentMethod: "Credit Card",
    },

];


export default orders;