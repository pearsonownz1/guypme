export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-6">
      <main className="flex w-full max-w-xl flex-col gap-4">
        <p className="text-sm tracking-[0.2em] uppercase text-zinc-500">
          guyp.me
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Guy Pearson
        </h1>
        <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          Resume site coming soon.
        </p>
      </main>
    </div>
  );
}
