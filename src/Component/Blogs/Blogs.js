import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto  '>
            <div className='flex justify-center items-center h-[78.5vh]'>
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
                            <strong>This is the second item's accordion body.</strong> It is hidden by default,
                            until the collapse plugin adds the appropriate classes that we use to style each
                            element. These classes control the overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                            our default variables. It's also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit overflow.
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
                            <strong>This is the third item's accordion body.</strong> It is hidden by default,
                            until the collapse plugin adds the appropriate classes that we use to style each
                            element. These classes control the overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                            our default variables. It's also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;