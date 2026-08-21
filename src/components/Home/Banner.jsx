import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 md:px-12 md:py-16">
            {/* Background glow */}
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-purple-600/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
                {/* Left content */}
                <div className="max-w-2xl">
                    <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-purple-300">
                        AI Solutions • Software Development • IT Services
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Build Smarter With
                        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            AI & Technology
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
                        DevMeet helps businesses build modern software, automate
                        workflows and integrate AI into real-world products.
                        From idea to deployment, we create technology that solves
                        real problems.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                            
                      <Link href="/service" className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">
                       Explore Our Services 
                       </Link>

                        <button className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                            Contact Us
                        </button>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
                        <span>✓ AI Integration</span>
                        <span>✓ Web Development</span>
                        <span>✓ Cloud Solutions</span>
                    </div>
                </div>

                {/* Right image */}
                <div className="relative">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />

                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl">
                        <img
                            src="/ai-services-hero.png"
                            alt="AI and technology services"
                            className="h-[320px] w-full rounded-2xl object-cover md:h-[420px]"
                        />
                    </div>

                    {/* Floating card */}
                    <div className=" absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur md:block">
                        <p className="text-xs text-slate-400">Powered by</p>
                        <p className="mt-1 font-semibold text-white">
                            AI + Modern Software
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;