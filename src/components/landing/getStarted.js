import React from 'react';
import Button from '../button/button';

const GetStarted = ({ onClick }) => {
  return (
    <div className="overflow-hidden bg-primary-100 py-24 my-16">
  <div className="flex mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-semibold leading-7 text-cyan-800">how Alli works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Getting started is easy!</p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-5 w-5 text-cyan-800" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M 2.32411 12.7167 C 1.92827 12.3209 1.92827 11.6791 2.32411 11.2833 L 11.2833 2.32411 C 11.6791 1.92827 12.3209 1.92827 12.7167 2.32411 L 21.6759 11.2833 C 22.0717 11.6791 22.0717 12.3209 21.6759 12.7167 L 12.7167 21.6759 C 12.3209 22.0717 11.6791 22.0717 11.2833 21.6759 L 2.32411 12.7167 Z M 0.890641 9.8498 C -0.29688 11.0373 -0.29688 12.9627 0.890641 14.1502 L 9.8498 23.1094 C 11.0373 24.2969 12.9627 24.2969 14.1502 23.1094 L 23.1094 14.1502 C 24.2969 12.9627 24.2969 11.0373 23.1094 9.8498 L 14.1502 0.890641 C 12.9627 -0.29688 11.0373 -0.296881 9.8498 0.890641 L 0.890641 9.8498 Z M 11.6537 15.9693 C 11.7185 16.0261 11.7915 16.0545 11.8726 16.0545 H 13.4538 C 13.543 16.0545 13.616 16.0261 13.6728 15.9693 C 13.7295 15.9044 13.7579 15.8315 13.7579 15.7504 V 7.84418 C 13.7579 7.75499 13.7295 7.68201 13.6728 7.62524 C 13.616 7.56848 13.543 7.5401 13.4538 7.5401 H 11.9334 C 11.828 7.5401 11.7307 7.56848 11.6415 7.62524 L 8.84393 9.79032 C 8.74662 9.84708 8.69797 9.93223 8.69797 10.0458 C 8.69797 10.1025 8.71824 10.1633 8.75878 10.2282 L 9.47642 11.1648 C 9.5494 11.2621 9.63049 11.3107 9.71969 11.3107 C 9.78456 11.3107 9.84538 11.2864 9.90214 11.2378 L 11.5685 9.96061 V 15.7504 C 11.5685 15.8315 11.5969 15.9044 11.6537 15.9693 Z" clip-rule="evenodd" />
                </svg>
                Select the category of therapist you'd like to work with.
              </dt>
            </div>

            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-5 w-5 text-cyan-800" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M 2.32411 12.7167 C 1.92827 12.3209 1.92827 11.6791 2.32411 11.2833 L 11.2833 2.32411 C 11.6791 1.92827 12.3209 1.92827 12.7167 2.32411 L 21.6759 11.2833 C 22.0717 11.6791 22.0717 12.3209 21.6759 12.7167 L 12.7167 21.6759 C 12.3209 22.0717 11.6791 22.0717 11.2833 21.6759 L 2.32411 12.7167 Z M 0.890641 9.8498 C -0.29688 11.0373 -0.29688 12.9627 0.890641 14.1502 L 9.8498 23.1094 C 11.0373 24.2969 12.9627 24.2969 14.1502 23.1094 L 23.1094 14.1502 C 24.2969 12.9627 24.2969 11.0373 23.1094 9.8498 L 14.1502 0.890641 C 12.9627 -0.29688 11.0373 -0.296881 9.8498 0.890641 L 0.890641 9.8498 Z M 8.66155 15.9693 C 8.72643 16.0261 8.80346 16.0545 8.89266 16.0545 H 15.1325 C 15.2217 16.0545 15.2946 16.0261 15.3514 15.9693 C 15.4163 15.9125 15.4487 15.8396 15.4487 15.7504 V 14.5219 C 15.4487 14.4327 15.4163 14.3597 15.3514 14.3029 C 15.2946 14.2462 15.2217 14.2178 15.1325 14.2178 H 12.0065 L 13.1255 13.0866 C 13.8472 12.5433 14.3824 12.0405 14.7311 11.5783 C 15.0879 11.108 15.2663 10.589 15.2663 10.0214 C 15.2663 9.49435 15.1406 9.03214 14.8892 8.6348 C 14.6378 8.23747 14.2689 7.92933 13.7823 7.71039 C 13.2958 7.49145 12.712 7.38198 12.0308 7.38198 C 11.3821 7.38198 10.8064 7.51172 10.3036 7.7712 C 9.80896 8.02258 9.42379 8.36721 9.14809 8.80509 C 8.88049 9.23486 8.73859 9.70923 8.72237 10.2282 C 8.72237 10.3012 8.7467 10.362 8.79535 10.4107 C 8.844 10.4593 8.90482 10.4836 8.9778 10.4836 H 10.4982 C 10.7253 10.4836 10.8631 10.3904 10.9118 10.2039 C 10.9685 9.90385 11.0861 9.65653 11.2645 9.46191 C 11.4429 9.25919 11.6983 9.15783 12.0308 9.15783 C 12.6633 9.15783 12.9795 9.47813 12.9795 10.1187 C 12.9795 10.3539 12.8822 10.6012 12.6876 10.8607 C 12.493 11.1202 12.2051 11.408 11.824 11.7243 C 11.4429 12.0405 10.8834 12.4825 10.1455 13.0501 L 8.88049 14.2908 C 8.67777 14.4448 8.57641 14.6435 8.57641 14.8868 V 15.7504 C 8.57641 15.8396 8.60479 15.9125 8.66155 15.9693 Z" clip-rule="evenodd" />
                </svg>
                Choose a session rate that works best for you.
              </dt>
            </div>

            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-5 w-5 text-cyan-800" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M 2.32411 12.7167 C 1.92827 12.3209 1.92827 11.6791 2.32411 11.2833 L 11.2833 2.32411 C 11.6791 1.92827 12.3209 1.92827 12.7167 2.32411 L 21.6759 11.2833 C 22.0717 11.6791 22.0717 12.3209 21.6759 12.7167 L 12.7167 21.6759 C 12.3209 22.0717 11.6791 22.0717 11.2833 21.6759 L 2.32411 12.7167 Z M 0.890641 9.8498 C -0.29688 11.0373 -0.29688 12.9627 0.890641 14.1502 L 9.8498 23.1094 C 11.0373 24.2969 12.9627 24.2969 14.1502 23.1094 L 23.1094 14.1502 C 24.2969 12.9627 24.2969 11.0373 23.1094 9.8498 L 14.1502 0.890641 C 12.9627 -0.29688 11.0373 -0.296881 9.8498 0.890641 L 0.890641 9.8498 Z M 9.99472 15.8112 C 10.5299 16.0545 11.1908 16.1761 11.9774 16.1761 C 12.6585 16.1761 13.2707 16.0666 13.814 15.8477 C 14.3573 15.6287 14.783 15.3165 15.0912 14.9111 C 15.3993 14.5057 15.5534 14.0313 15.5534 13.488 C 15.5534 12.742 15.3344 12.1703 14.8966 11.7729 C 14.4668 11.3675 13.8789 11.1161 13.1329 11.0188 L 13.0477 10.9945 L 14.8966 9.27946 C 15.0263 9.16594 15.0912 9.03214 15.0912 8.87807 V 7.84418 C 15.0912 7.75499 15.0587 7.68201 14.9939 7.62524 C 14.9371 7.56848 14.8641 7.5401 14.7749 7.5401 H 9.17978 C 9.09869 7.5401 9.02571 7.56848 8.96084 7.62524 C 8.90408 7.68201 8.8757 7.75499 8.8757 7.84418 V 8.98754 C 8.8757 9.06863 8.90408 9.14161 8.96084 9.20648 C 9.02571 9.26324 9.09869 9.29162 9.17978 9.29162 H 12.5612 L 10.5664 10.9823 C 10.4367 11.0796 10.3718 11.2175 10.3718 11.3959 V 12.077 C 10.3718 12.1581 10.4002 12.2311 10.4569 12.296 C 10.5218 12.3527 10.5948 12.3811 10.6759 12.3811 H 12.026 C 12.8693 12.3811 13.291 12.7055 13.291 13.3542 C 13.291 13.6867 13.1734 13.9502 12.9383 14.1448 C 12.7112 14.3313 12.3909 14.4246 11.9774 14.4246 C 11.2557 14.4246 10.8137 14.2137 10.6515 13.7921 C 10.6029 13.7029 10.5502 13.6421 10.4934 13.6096 C 10.4367 13.5772 10.3637 13.561 10.2745 13.561 H 8.68108 C 8.6081 13.561 8.54323 13.5853 8.48647 13.6339 C 8.43781 13.6826 8.41349 13.7434 8.41349 13.8164 C 8.42971 14.1813 8.5635 14.5462 8.81488 14.9111 C 9.07436 15.2679 9.46765 15.5679 9.99472 15.8112 Z"  clip-rule="evenodd" />
                </svg>
                Get matched with 2-3 therapists for you to choose from.
              </dt>
            </div>

            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-5 w-5 text-cyan-800" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M 2.32411 12.7167 C 1.92827 12.3209 1.92827 11.6791 2.32411 11.2833 L 11.2833 2.32411 C 11.6791 1.92827 12.3209 1.92827 12.7167 2.32411 L 21.6759 11.2833 C 22.0717 11.6791 22.0717 12.3209 21.6759 12.7167 L 12.7167 21.6759 C 12.3209 22.0717 11.6791 22.0717 11.2833 21.6759 L 2.32411 12.7167 Z M 0.890641 9.8498 C -0.29688 11.0373 -0.29688 12.9627 0.890641 14.1502 L 9.8498 23.1094 C 11.0373 24.2969 12.9627 24.2969 14.1502 23.1094 L 23.1094 14.1502 C 24.2969 12.9627 24.2969 11.0373 23.1094 9.8498 L 14.1502 0.890641 C 12.9627 -0.29688 11.0373 -0.296881 9.8498 0.890641 L 0.890641 9.8498 Z M 12.3943 15.9693 C 12.4592 16.0261 12.5322 16.0545 12.6133 16.0545 H 14.1215 C 14.2107 16.0545 14.2837 16.0261 14.3405 15.9693 C 14.3972 15.9044 14.4256 15.8315 14.4256 15.7504 V 14.3759 H 15.5081 C 15.5973 14.3759 15.6703 14.3475 15.7271 14.2908 C 15.7839 14.234 15.8122 14.161 15.8122 14.0718 V 12.8677 C 15.8122 12.7866 15.7839 12.7176 15.7271 12.6609 C 15.6703 12.596 15.5933 12.5636 15.496 12.5636 H 14.4256 V 7.84418 C 14.4256 7.75499 14.3972 7.68201 14.3405 7.62524 C 14.2837 7.56848 14.2107 7.5401 14.1215 7.5401 H 12.3457 C 12.1592 7.5401 12.0092 7.60903 11.8956 7.74688 L 8.35609 12.5392 C 8.26689 12.669 8.2223 12.7947 8.2223 12.9163 V 14.0718 C 8.2223 14.161 8.25068 14.234 8.30744 14.2908 C 8.3642 14.3475 8.43718 14.3759 8.52638 14.3759 H 12.3092 V 15.7504 C 12.3092 15.8315 12.3376 15.9044 12.3943 15.9693 Z M 12.3578 9.77816 V 12.6487 H 10.3144 L 12.3578 9.77816 Z" clip-rule="evenodd" />
                </svg>
                Book your Initial Assessment Session.
              </dt>
            </div>
          </dl>
        </div>
        <div className="mt-10 flex items-center justify-center sm:justify-start">
          <Button onClick={onClick}>Get Started <span aria-hidden="true">&rarr;</span></Button>
        </div>
      </div>
      <img src="https://res.cloudinary.com/dhze7gimq/image/upload/v1680299613/alli/landing_v1/therapy_lhnt6u.jpg" alt="Product screenshot" className="h-72 w-auto object-cover max-h-[450px] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[52rem] sm:h-auto md:-ml-4 lg:-ml-0" width="2432" height="1442" />
    </div>
  </div>
</div>
  )

}

export default GetStarted;
