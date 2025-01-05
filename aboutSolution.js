```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/navigation'; // Import from 'next/navigation'

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/contact'); // Navigation works correctly now
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact Page</button>
    </div>
  );
}
```