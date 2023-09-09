export default function Footer() {
  return (
   <div class="flex items-end w-full ">

    <footer class="w-full bg-th-primary-medium body-font">
        <div
            class="max-w-5xl container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
           
            <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-sm font-medium tracking-widest  uppercase title-font">About</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">Company</a>
                        </li>
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">Careers</a>
                        </li>
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">Blog</a>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-sm font-medium tracking-widest  uppercase title-font">Support</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">Contact Support</a>
                        </li>
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">Help Resources</a>
                        </li>
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">Release Updates</a>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-sm font-medium tracking-widest  uppercase title-font">Platform
                    </h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">Terms &amp; Privacy</a>
                        </li>
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">Pricing</a>
                        </li>
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">FAQ</a>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-sm font-medium tracking-widest  uppercase title-font">Contact</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">Send a Message</a>
                        </li>
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">Request a Quote</a>
                        </li>
                        <li class="mt-3">
                            <a class=" cursor-pointer hover:">+123-456-7890</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div class="bg-th-background-secondary">
            <div class="container px-5 py-4 mx-auto">
                <p class="text-sm  capitalize xl:text-center">© 2023 Stasse Integrated Solutions </p>
            </div>
        </div>
    </footer>

</div> );
}
