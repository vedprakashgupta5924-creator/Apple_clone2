// import React from "react";

// export default function Apple() {
//   return (
  // <div className="min-h-screen bg-white text-black font-sans">
//       <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-sm text-slate-200">
//           <a href="#" className="font-semibold tracking-wide"></a>
//           <nav className="hidden items-center gap-5 md:flex">
//             <a href="#iphone" className="hover:text-white">iPhone</a>
//             <a href="#mac" className="hover:text-white">Mac</a>
//             <a href="#ipad" className="hover:text-white">iPad</a>
//             <a href="#watch" className="hover:text-white">Watch</a>
//             <a href="#airpods" className="hover:text-white">AirPods</a>
//             <a href="#accessories" className="hover:text-white">Accessories</a>
//           </nav>
//           <div className="flex items-center gap-4 text-slate-200">
//             <a href="#" className="hover:text-white">Search</a>
//             <a href="#" className="hover:text-white">Bag</a>
//           </div>
//         </div>
//       </header>

//       <main className="space-y-16 px-4 py-10 sm:px-6 lg:px-8">
//         <section id="iphone" className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
//           <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
//             <div className="space-y-6 text-center lg:text-left">
//               <p className="text-sm uppercase tracking-[0.4em] text-slate-400">New</p>
//               <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">iPhone 15 Pro</h1>
//               <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Titanium. A17 Pro chip. USB-C. That’s iPhone 15 Pro.</p>
//               <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
//                 <a href="#" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/10">Learn more</a>
//                 <a href="#" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/10">Buy</a>
//               </div>
//             </div>
//             <div className="space-y-6">
//               <img
//                 src="https://via.placeholder.com/720x480?text=iPhone+15+Pro"
//                 alt="iPhone 15 Pro"
//                 className="mx-auto w-full rounded-[2rem] border border-white/10 object-cover"
//               />
//               <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center">
//                 <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Pre-order</p>
//                 <h2 className="mt-4 text-3xl font-semibold">From ₹1,34,900</h2>
//                 <p className="mt-2 text-slate-300">Available starting September 22.</p>
//               </div>
//             </div>
//           </div>
//         </section>

        // <section id="mac" className="grid gap-6 lg:grid-cols-2">
        //   <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        //     <img
        //       src="https://via.placeholder.com/640x360?text=MacBook+Air"
        //       alt="MacBook Air"
        //       className="mb-6 h-48 w-full rounded-[1.5rem] border border-white/10 object-cover"
        //     />
        //     <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Mac</p>
        //     <h2 className="mt-4 text-3xl font-semibold">MacBook Air</h2>
        //     <p className="mt-3 text-slate-300">Supercharged by M2 chip. 18-hour battery life.</p>
        //     <div className="mt-8 flex flex-wrap gap-4">
        //       <a href="#" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Learn more</a>
        //       <a href="#" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Buy</a>
        //     </div>
        //   </div>
        //   <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        //     <img
        //       src="https://via.placeholder.com/640x360?text=Mac+Studio"
        //       alt="Mac Studio"
        //       className="mb-6 h-48 w-full rounded-[1.5rem] border border-white/10 object-cover"
        //     />
        //     <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Mac</p>
        //     <h2 className="mt-4 text-3xl font-semibold">Mac Studio</h2>
        //     <p className="mt-3 text-slate-300">Power for pros. Creativity without limits.</p>
        //     <div className="mt-8 flex flex-wrap gap-4">
        //       <a href="#" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Learn more</a>
        //       <a href="#" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Buy</a>
        //     </div>
        //   </div>
        // </section>

        // <section id="ipad" className="grid gap-6 lg:grid-cols-3">
        //   <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        //     <img
        //       src="https://via.placeholder.com/560x320?text=iPad+Pro"
        //       alt="iPad Pro"
        //       className="mb-6 h-40 w-full rounded-[1.5rem] border border-white/10 object-cover"
        //     />
        //     <p className="text-sm uppercase tracking-[0.35em] text-slate-400">iPad</p>
        //     <h3 className="mt-4 text-2xl font-semibold">iPad Pro</h3>
        //     <p className="mt-3 text-slate-300">M4 chip. Liquid Retina display. Magic Keyboard ready.</p>
        //     <a href="#" className="mt-6 inline-block rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Learn more</a>
        //   </div>
        //   <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        //     <img
        //       src="https://via.placeholder.com/560x320?text=iPad+Air"
        //       alt="iPad Air"
        //       className="mb-6 h-40 w-full rounded-[1.5rem] border border-white/10 object-cover"
        //     />
        //     <p className="text-sm uppercase tracking-[0.35em] text-slate-400">iPad</p>
        //     <h3 className="mt-4 text-2xl font-semibold">iPad Air</h3>
        //     <p className="mt-3 text-slate-300">Powerful and colorful. For work and play.</p>
        //     <a href="#" className="mt-6 inline-block rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Buy</a>
        //   </div>
        //   <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        //     <p className="text-sm uppercase tracking-[0.35em] text-slate-400">iPad</p>
        //     <h3 className="mt-4 text-2xl font-semibold">iPad mini</h3>
        //     <p className="mt-3 text-slate-300">Ultra portable. Stunning performance.</p>
        //     <a href="#" className="mt-6 inline-block rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">Learn more</a>
        //   </div>
        // </section>

        // <section id="watch" className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        //   <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        //     <div>
        //       <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Watch</p>
        //       <h2 className="mt-4 text-3xl font-semibold">Apple Watch Series 9</h2>
        //       <p className="mt-3 text-slate-300">A powerful way to stay connected, active, and healthy.</p>
        //     </div>
        //     <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
        //       <a href="#" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/10">Learn more</a>
        //       <a href="#" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/10">Buy</a>
        //     </div>
        //   </div>
        // </section>

        // <section id="accessories" className="grid gap-6 lg:grid-cols-3">
        //   <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        //     <h3 className="text-2xl font-semibold">AirPods Pro</h3>
        //     <p className="mt-3 text-slate-300">Active Noise Cancellation. Adaptive Transparency.</p>
        //   </div>
        //   <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        //     <h3 className="text-2xl font-semibold">MagSafe</h3>
        //     <p className="mt-3 text-slate-300">Fast, easy wireless charging accessories.</p>
        //   </div>
        //   <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        //     <h3 className="text-2xl font-semibold">Apple Pencil</h3>
        //     <p className="mt-3 text-slate-300">Precision for iPad, creative tools at your fingertips.</p>
        //   </div>
        // </section>
//       </main>
//     </div>
//   );
// }
