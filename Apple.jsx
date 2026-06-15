import React from 'react'
import oipRemovebgPreview from './assets/OIP-removebg-preview.png'

function Apple() {
  return (
    <>
      <div className="hover-scale min-h-screen bg-white text-black font-sans">
        <style>{`
          .hover-scale img {
            transition: transform 0.3s ease-in-out;
          }
          .hover-scale img:hover {
            transform: scale(1.05);
          }
        `}</style>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">

          <nav className=" flex justify-between  items-center gap-8 px-10 h-10 ">
            <i className="fa-brands fa-apple"></i>
            <a href="#iphone" className="hover:text-white">iPhone</a>
            <a href="#mac" className="hover:text-white">Mac</a>
            <a href="#ipad" className="hover:text-white">iPad</a>
            <a href="#watch" className="hover:text-white">Watch</a>
            <a href="#airpods" className="hover:text-white">AirPods</a>
            <a href="#accessories" className="hover:text-white">Accessories</a>

            <div className="   ml-auto flex gap-4  text-black">
              <i class="fa-solid fa-magnifying-glass"></i>
              <i class="fa-solid fa-bag-shopping"></i>
            </div>
          </nav>
        </header>

        <main className="space-y-16 px-4 py-10 sm:px-6 lg:px-8">
          <section id="iphone" className="mx-auto max-w-6xl rounded-2rem border border-white/10 bg-radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">           <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.4em] text-black">New</p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">iPhone 17  Pro  Max </h1>
              <p className="max-w-2xl text-base leading-7 text-black sm:text-lg"> A19 Pro chip.  USB-C. That’s iPhone 17 Pro Max.</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
                <a href="#" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/10">Learn more</a>
                <a href="#" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/10">Buy</a>
              </div>
            </div>
            <div className='space-y-6'>
              <img src='https://www.designinfo.in/wp-content/uploads/0005/11/Apple-iPhone-17-Pro-Max-5.webp'
                alt="iPhone 17 Pro max "
                className="mx-auto w-full rounded-[2rem] border border-white/10 object-cover"
              />
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-black">Pre-order</p>
                <h2 className="mt-4 text-3xl font-semibold">From ₹1,55,900</h2>
                <p className="mt-2 text-black ">Available starting September 22.</p>
              </div>
            </div>
          </div>
          </section>

          <section id="mac" className="grid gap-6 lg:grid-cols-2">
            <div className="  border-white/10 bg-white/5 p-8">
              <img
                src="https://img.magnific.com/premium-psd/dark-macbook-air-mockup_1332-54657.jpg?semt=ais_hybrid&w=740&q=80"
                alt="MacBook Air"
                className=" rounded-[2rem] mb-6 <h-50></h-50> w-full  border border-white/10 object-cover"
              />
              <p className="text-sm uppercase tracking-[0.35em] text-black">Mac</p>
              <h2 className="mt-4 text-3xl font-semibold">MacBook Air</h2>
              <h2 className="mt-4 text-3xl font-semibold">From ₹1,30,900</h2>
              <p className="mt-3 text-black">Supercharged by M2 chip. 18-hour battery life.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Learn more</a>
                <a href="#" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Buy</a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <img
                src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23320968/bfarsace_171212_5072_0090.jpg?quality=90&strip=all&crop=0,0.03673769287289,100,99.926524614254"
                alt="Mac Studio"
                className="mb-6 <h-38 ></h-70>w-full rounded-[1.5rem] border border-white/10 object-cover"
              />
              <p className="text-sm uppercase tracking-[0.35em] text-black">Mac </p>
              <h2 className="mt-4 text-3xl font-semibold">Mac Studio </h2>
              <h2 className="mt-4 text-3xl font-semibold">From ₹1,10,900</h2>
              <p className="mt-3 text-black"> Power for pros. Creativity without limits. </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Learn more</a>
                <a href="#" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Buy</a>
              </div>
            </div>
          </section>



          <section id="ipad" className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2rem border border-white/10 bg-white/5 p-8">
              <img
                src="data:image/jpeg;base64,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"
                alt="iPad Pro"
                className="mb-6 h-60 w-full rounded-[1.5rem] border border-white/10 object-cover"
              />
              <p className="text-sm uppercase tracking-[0.35em] text-black">iPad</p>
              <h3 className="mt-4 text-2xl font-semibold">iPad Pro</h3>
              <h3 className="mt-4 text-3xl font-semibold">From ₹1,55,900</h3>
              <p className="mt-3 text-black">M4 chip. Liquid Retina display. Magic Keyboard ready.</p>
              <a href="#" className="mt-6 inline-block rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Learn more</a>
            </div>
            <div className="rounded-2rem border border-white/10 bg-white/5 p-8">
              <img
                src= "https://www.apple.com/v/ipad-air/t/images/meta/ipad-air_overview__cahgij9otxua_og.png?202310031155"             alt="iPad Air"
                className="mb-6 h-60 w-full rounded-[1.5rem] border border-white/10 object-cover"
              />
              <p className="text-sm uppercase tracking-[0.35em] text-black">iPad</p>
              <h3 className="mt-4 text-2xl font-semibold">iPad Air</h3>
              <h3 className="mt-4 text-3xl font-semibold">From ₹65,900.00 </h3>
              <p className="mt-3 text-black">Powerful and colorful. For work and play.</p>
              <a href="#" className="mt-6 inline-block rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Buy</a>
            </div>

            <div className="rounded-2rem border border-white/10 bg-white/5 p-8">
              <img
                src={oipRemovebgPreview}
                alt="iPad mini"
                className="mb-6 h-60 w-full rounded-[1.5rem] border border-white/10 object-cover"
              />

              <p className="text-sm uppercase tracking-[0.35em] text-black">iPad</p>
              <h3 className="mt-4 text-2xl font-semibold">iPad mini</h3>
              <h2 className="mt-4 text-3xl font-semibold">From ₹29,900</h2>
              <p className="mt-3 text-black">Ultra portable. Stunning performance.</p>
              <a href="#" className="mt-6 inline-block rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Learn more</a>
            </div>
          </section>

          <section id="watch" className="rounded-2rem border border-white/10 bg-white/5 p-8">
            <img
              src="https://www.apple.com/assets-www/en_WW/watch/og/watch_og_1ff2ee953.png"
              alt=''
              className="mb-6 h-90- w-full  rounded-[1.5rem] border border-white/10 object-cover" />
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-black">Watch</p>
                <h2 className="mt-4 text-3xl font-semibold">Apple Watch Series 11</h2>
                <h2 className="mt-4 text-3xl font-semibold">From ₹55,900.00</h2>
                <p className="mt-3 text-black">A powerful way to stay connected, active, and healthy.</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <a href="#" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/10">Learn more</a>
                <a href="#" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/10">Buy</a>
              </div>
            </div>
          </section>


          <section id="accessories" className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2rem border border-white/10 bg-white/5 p-8">
              <img
                src="data:image/jpeg;base64,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"
                alt=" air pods pro"

                className="mb-6 h-66 w-full rounded-[1.5rem] border border-white/10 object-cover"
              />
              <h3 className="text-2xl font-semibold">AirPods Pro</h3>
              <h3 className="mt-4 text-3xl font-semibold">From ₹21,900.00</h3>
              <p className="mt-3 text-black">Active Noise Cancellation. Adaptive Transparency.</p>
            </div>

            <div className="rounded-2rem border border-white/10 bg-white/5 p-8">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="mb-6 h-66 w-full rounded-[1.5rem] border border-white/10 object-cover"
              />
              <h3 className="text-2xl font-semibold">MagSafe</h3>
              <h3 className="mt-4 text-3xl font-semibold">From ₹4,900.00</h3>

              <p className="mt-3 text-black">Fast, easy wireless charging accessories.</p>
            </div>


            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQQERISEhAVEhIWFRYWGBcWEhEWFRUSFRcYFxcWFRcYHSgiGRolHxMVITEtJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGjYlIB0tLSsuLTEvNzItLS0tLS0tLS0tLzMtLS0tLi0tLS0tLS0rKystLS0rLSstLS0tLS0tLf/AABEIAJABXgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQHAv/EAEQQAAIBAgIGBwQHBAkFAAAAAAABAgMRBCEFBhIxQVETImFxgZGhFDJSsUJicpLB0fAHI4LSJDNTg5OisuHxFSVUY2T/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACoRAQEAAgAFAwMDBQAAAAAAAAABAhEDBBIxQRMhkVFx0RSB8EJhobHB/9oADAMBAAIRAxEAPwDw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAseper/ALZW2pp9BB3lw25b1TT7bXb4JdqAmdStU6c6TxOLjeLX7uDbV18crb1dZLjZvNWK1rJRpRqXorZi3JNXbV42zjfh1vQuuuWm1FdBTlspLrNK2zHdkvJJdx5xiK2272slklyXIDUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmMW2kldvJJb2wOzQ+jJ4qtCjTV5Se/hGPGUuxI9R0rXpaNwsMPRV5JWXxSnLe32v8luRq1c0XHRWFlVq2WIqRvL6kd6gu7jzfcig6waWlWm5N5vcvhi/xfyA4NI4tzk8753b+KX5Lcv8Ac4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOvRujauInsUoOb48ornJvJLvLto/R2FwMYucYYjE8XJbVOD32hF5O1t7V+4lumpja8+PQv2c6uJL26uupH+pT4yWTqW7Ny7bvgif0PipY2bi0uhjnN7KtbhFdrt5XOPXHTi6uHo2isoq1lGMd27grDZcdXSv656f6abSfUTsl8Ul+CKXKV3d72T+kNXcQ3tQiqseGxK7S+y7O/dcgq1KUG4zi4yW9STTXemIlj4ABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJnQur88Qttvo6N85tb7b1BcX6Ak2iaVNyajGLlJ5JJNtvsSLNo7VBpKeKn0MfgVnUffwj69xIRxtDBrZw8etxm3eb73wXYrIhsdpWdR3bMXL6Osw+qcx2madGn0OGiqcFy3t8297feQGGVTE1oU6a2pydly7W+SSzfcR1aqekas6KWjsO69VL2iotz304b1Hv3N9tlwEhcvEdOkcRDR2GVGm7y3yfGU3vb/WSSR5viK8pzcm7t5nfpzSTrVWm99/DK5xUKV4XS5ekVb1foxasiY0bpFwtmWL26nXgo16cakeUldrue9eBUMFQa3nS67iZad2O1NpVbyw1bo38FS7j4TWa8UyqaT0RWwz/AHtNxW5S3wfdJZMnKWkZR4krg9ZXFbMkpRaaalZprtTNSsXCKAC+T9gqu88Kov8A9c5Q/wAqez6Gp6P0et1GpLsdV29Ema2x0qQC7vBYN7sKl/e1/wCc5quDwq3UV9+r/MNr0VUQWpwoLdSh4q/zNc69NLKEV3RQ2nSrIO/GV03kjhbKywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXHG4xqlGMcoxikl2WKcWWHXowl9VLxWX4Gcm8PKHlU3mt1L5LM+q6V89xM6oaDeNrqEepSjaVWa3qHwp/FKzS8XwEi2pnULVy79sxCtTg/3cX9Kovpdyfr3DW/T223nluS/XAn9bdLQpU1SpWjTgkklusslYouG0RUxM9upelT7fetyS/F+pLSTyjdHYSpXqpQV3e7fBLi2W+no2NKEYrNR9Xxb7TMa1OhHo6UVFcebfNvizlr6UsnnmS3bcmmjHT2VZEPVrs1YrFuTeZyyqNlkS1unX7T49pZpZixdM9VdCxT5n3HHSOMRZdJ1VIe3yfEz7QzijIy6hNHU6pVjROsaJTPhsumbX1OVz4AKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHRr/o9+Cv53eRXibp3VGnBces/Ezk3hPdyUsLOtUjTpranOVku1/JcfA9KpypaOoLDQknUedSXFze/wDK3BJEVgaEdH0Omkv6RUjaK406b+Un+RVcVjpSbbd2yba177qfxWNgm5JbUubz/wCDkxGmUk7Ffq1W95zSYkLk762Pcne5yTqt8TVcF0zsbAAQMBgowYMmAhcXDMFBmAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANuFpbc4Q+KSXmz0rV3QClP2iqrU4ZqPNr3V3L527Si6r6LlisVTpRk457UpLfGEc3Lv4LtaPXtOVo0KVl1KVOPHsW9k6d10xvtYoWsWIlVqzvzflwICrDLNHXHTyqVJbUVZvq3drLk3+t5rxbc21u7EjGtO0mNx2i6sjTc21qdj4UTThXztGdpczFSnbPgay6TbbdcwajKY0m2wHwpn1tjS7ZsGjG0YcgDPlhswVKAAIAAAAAAAAAHbh9GznnbZXb+SNY4ZZXWMHECTeDow9+s2+UUv9/wPiVfDx92jKf2ptf6Td4Vneyfz+y6R4OyWOXChSX8Mm/NvM24enXqZ06G1f4aEWvPZManhEcCyYXVXG1Gn0aguc3TS+6rv0JKhqJJderioQzu9iLdu53VvI1OFne0XSkgvC0Vo2k3t13WlxXSLxzja3izqwmIw7tHDYKNS25tOaXe2ml5nXDlcsvM+TTz6KvkldnRHR9V7qNR91Of5HqmEnXWd6dJcoQu+697I+NI6XrQv/3GrS+rGNKT8EobR2y5HLGb2aeZLRNf/wAer/hVPyOevhp08pwlB/Wi4/MteK0vj5z6uPruPxSk6b8Ixbdu+xthrDiaS/eaQqzy3TqbS+673OE4F+33NKUCbx2FniWpUsPKTeblClsRfhFJXPiro2NJJ1brvUovy3kx5fK26s1PPhemodH1sO9rO/K2ZNYbSFCDSjhlJ7ryk7eSV2XLRWEqVUn7PClD4pU839mMnfxaR0w5fHL26vh14fB6+1ebLDzf0JfdZn2Wf9nL7sj1XGaInvhi1St/89CSt6FZxaxqns0azrLjLoaVOKfZtLrLuyLeWk8W/DWfA6O//PylP2e4FYWjLFV1sRnfrPJxowe+31pLd9Vb7lf121teNnsU7ww8XkuM2vpS7OS/StmJ9orKLrypUqSjFRipOSjsq190et4tdhFY3B4CraDqRlVtbahKKk3zduq3lyNXlbMe+vuz0+3Tj5efktoXScaclGsnKk8rrOUOTV/eXZ6on6WquHXvzr2+r0f8t/Q7MJqjgq8X0WIqSf24bS7HHZTXikef0Mmpy/FxqJ0vo+CpdNGrTnTa6rjJXk+C2X1k+xq6IfBYR1M4xdt17O1+Vz1bQejaeEhGPs9OUkrOpGEdua5y2s0+5+C3Edrhi41IxUW4uLfWc50JRvbdtQcai/Ssa/TSTu75cL+rJ5vjcLNNxVOdk9+zKz7st284ZRayaafaWaNHHJXiukj2dFK659V/iaKumasMq2Ht3qUf9VzN4Unfc/Z57jwsr3s/ZX9l2vbIOLW9Fhp4nDVspRjFv4lsf5o5edj7raAg/clKF+1Si+7/AJHpW9rtr9LllN4WVWgSuK0LVp9bZVSK+H8Y7zmoVaTynTce2En8pXMdF3q+zhnhlhdZTTjBMvQ8JrapVrrlJfNrd5EbisJOn7yy4NZp+JcuFnjN2ezOmgAHNAAAAAAAAAAAbMPs7S29rY47Ntq3ZfI7qOO2erJxq0+Kl0kW1ybjn6sjQaxzuPYT1LG4K3WwbvyVeo/O9jfT0zgoLq4C7+tNy9ZXK0DXqX6T4Xa109cIQ/q8DSh4r8Io+K2vWIfuxpw/hbfqyrgetn9TaYr6z4qe/ES8FGPyRy4fG3ntVnKr1Xs7UnJRnwk031kuXz3PhBnqt70lSui8RRhUc68elWVlFWV+2Nkt3h3lppa30ErWlFLctjJLuRQQd+FzWfCmsZDa24zWOdWTUK8KcOC2Z7Vu1u3p6nBLFxXvYlv7NNL1syBBbzeV97P9/lEvVxtLj0tTvm0n5fkfVHWCVJWoUaVL62xtz+9O5DA5ZcbK3fZrHO49k9h9a8RtXqVZSjyWys+eSJChrPB++rripKcsuP0nmVEGseZ4mPnbpOPnPa3b0vD6c0fSSlCUYvhs0pbS8o3RH6U16jmqNNyfxTsknzss35oogLeZys1PZMuLuakkWla7VeNKD7tpCWtsZe/hYy/iX4xKsDPr8T6ue1vwmmsHN7M8Na/KMd/emjNSlo5vjHfk+n+efzKgmfTqMnq3zJ8IuGHxGGw9nHGTlHhH30uVrLI4tL6boVGrU3Nr6XuNPg1LNrgytNmC3jWzWm/Uy1rfsm8DrXiqNkqzklwmlP1efqT+G/aJLdVoRmucW45fZz+ZRQYnEynatY8bOdq9JhrjgZPOjKD+JRVvNZnXT1gwNTL2i3ZKM0vHajb1PKwdseb4mLXr3zJXouNei5XcqtLwpTv501c4aWMwFG6pV5WfDYrOPelLcykAXmcr4nwmPG6curGSfz7rz/1zC/2sv8ORAaWeGqVJ1I1ZLad9mNHJZLi5K7e995Cgzlx+qauM/wA/leJzGfEmsklhsZTo32FObfGWzHLuVzVitIyqLZslHzZxAzeNn09Phx2AA5IAAAAAAAA//9k="
                alt=""
                className="mb-6 h-66 w-full rounded-[1.5rem] border border-white/10 object-cover"
              />

              <h3 className="text-2xl font-semibold">Apple Pencil</h3>
              <h2 className="mt-4 text-3xl font-semibold">From ₹5,900.00</h2>
              <p className="mt-3 text-black">Precision for iPad, creative tools at your fingertips.</p>
            </div>
          </section>

          <footer className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-8 text-black shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-black/70">Shop and Learn</p>
                <ul className="mt-4 space-y-2 text-sm text-black/80">
                  <li>Store</li>
                  <li>Mac</li>
                  <li>iPad</li>
                  <li>iPhone</li>
                  <li>Watch</li>
                  <li>AirPods</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-black/70">Apple Store</p>
                <ul className="mt-4 space-y-2 text-sm text-black/80">
                  <li>Find a Store</li>
                  <li>Today at Apple</li>
                  <li>Financing</li>
                  <li>Trade In</li>
                  <li>Order Status</li>
                  <li>Shopping Help</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-black/70">For Business</p>
                <ul className="mt-4 space-y-2 text-sm text-black/80">
                  <li>Apple and Business</li>
                  <li>Shop for Business</li>
                  <li>For Education</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-black/70">About Apple</p>
                <ul className="mt-4 space-y-2 text-sm text-black/80">
                  <li>Newsroom</li>
                  <li>Apple Leadership</li>
                  <li>Investors</li>
                  <li>Ethics & Compliance</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-black/10 pt-6 text-sm text-black/70">
              <p>More ways to shop: Find an Apple Store or other retailer near you.</p>
              <p className="mt-2">Copyright © 2026 Apple Inc. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Apple