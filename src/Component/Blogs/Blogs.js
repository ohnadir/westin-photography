import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-7xl  px-2 mx-auto'>
            <div className='flex justify-center items-center h-[78.5vh] '>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="headingOne">
                        <button class="
                            accordion-button
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            border-0
                            rounded-none
                            transition
                            focus:outline-none
                        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Difference between authorization and authentication ?
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body py-4 px-5">
                            অথেন্টিকেশন পদ্ধতি  অনুমোদিত ব্যবহারকারীদের একটি ডাটাবেসে বা একটি ডেটা  সার্ভারে সংরক্ষিত ব্যবহারকারীর তথ্যগুলি্র  সাথে  প্রেরন কারীর তথ্য মেলে কিনা তা পরীক্ষা করে সিস্টেমগুলির জন্য অ্যাক্সেস নিয়ন্ত্রণ সরবরাহ করে ৷ কাউকে কোন কাজ করার জন্য বা কোন রিসোর্স ব্যবহার করার পারমিশন দেয়ার প্রক্রিয়াকে অথোরাইজেশন বলে । অথেন্টিকেশন ব্যবহারকারী কে তা যাচাই করে। অথোরাইজেশন নির্ধারণ করে কোন ব্যবহারকারী কোন রিসোর্স অ্যাক্সেস করতে পারে। অথেন্টিকেশন একটি ভাল পরিচয় এবং অ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ। অথোরাইজেশন অনুমোদন সর্বদা অথেন্টিকেশন পরে সঞ্চালিত হয়।
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="headingTwo">
                        <button class="
                            accordion-button
                            collapsed
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            border-0
                            rounded-none
                            transition
                            focus:outline-none
                        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body py-4 px-5">
                                ফায়ার বেইজ একটি গুগলের দ্বারা পরিচালিত হওয়া একটি প্ল্যাটর্ফম যার মাধ্যমে আমরা সহজেই ওয়েব সাইট হোস্টিং, ক্লাউড স্টোরেজ, ক্লাউড মেসেজিং ইত্যাদি করতে পারি । ফায়ার বেইজ দিয়ে ওয়েব সাইট ইম্পিমেন্ট করার ফলে ব্যবহারকারীরা তাদের ইনফরমেশন এবং ইউজার ইন্টারফেইস গ্রহন করে থাকে । ফায়ার বেইজের অথেন্টিকেশন ছাড়া Duo হল একটি ব্যাপক ইউজার অথেন্টিকেশন এবং অ্যাক্সেস ম্যানেজমেন্ট প্ল্যাটফর্ম। এটি ইউজার দের অথেন্টিকেশন জন্য  সার্ভার এবং অ্যাপ্লিকেশনগুলিতে নিরাপদ অ্যাক্সেস প্রদান করে । Duo মাল্টি-ফ্যাক্টর অথেন্টিকেশন, একক সাইন-অন, কনফিগারযোগ্য অভিযোজিত অ্যাক্সেস নীতি এবং ডিভাইস নির্ভর কার্যকারিতা প্রদান করে।
                                
                                
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="headingThree">
                        <button class="
                            accordion-button
                            collapsed
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            border-0
                            rounded-none
                            transition
                            focus:outline-none
                        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            What other services does firebase provide other than authentication
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body py-4 px-5">
                        ফায়ার বেইজ একটি গুগল সমর্থিত ক্লোজড সোর্স প্ল্যাটর্ফম যেখানে অনেকগুলি চমৎকার ফিচার রয়েছে যা ডেভেলপার দের দ্রুত একটি MVP তৈরি করতে দেয় ৷ ফায়ার বেইজ ওয়েব সাইট সাক্সেস ফুল ভাবে বিল্ড রান করতে সাহায্য করে ।  ফায়ার বেইজ অথেন্টিকেশন ছাড়া অনেক গুলি সার্ভিস প্রদান করেন তার মদ্ধে অন্যতম হলো রিয়েল টাইম ডাটাবেস । অন্য দিকে ফায়ার বেইজ হোস্টিং ও প্রভাইড করে যার ফলে ডেভেলপার রা সহজে ব্যবহার করতে পারে । ক্লাউড মেসেজিং ও ফায়ার বেইজ দ্বারা খুব সহজেই করা সম্ভব । তাছারা অনেক গুলা ফিচার রয়েছে ্ যেই গুলা ফায়ার বেইজ দিয়ে করা যায় যেমনঃ- রিমোট কনফিগ, ফায়ার বেইজ ML , ক্লাউড ফাংশন, ক্লাউড স্টোরেজ ।
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;