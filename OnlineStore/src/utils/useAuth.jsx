// export default function useAuth() {
//     //getting token from local storage
//     const user = localStorage.getItem('token')
//     //checking whether token is preset or not
//     if (user) {
//         return true;
//     } else {
//         return false
//     }
// };

export default function useAuth() {
    // Temporarily bypass token check, always return true
    return true; // Simulate that the user is authenticated
}
