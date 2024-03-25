"use client";
import Spinner from "../Spinner/Spinner";


export default function Loading() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 m-auto">
            <div className="flex flex-col">
                <div className="text-size-xl">
                    <Spinner />
                </div>
            </div>
        </main>
    );
  }