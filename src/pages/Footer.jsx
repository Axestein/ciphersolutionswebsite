export default function SimpleFooter() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-blue-700/50 py-12 px-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
        <p className="text-blue-200 mb-6">Subscribe to get our latest updates and news.</p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-2 rounded bg-white/10 border border-blue-600/50 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-blue-700 hover:bg-blue-800 rounded font-medium">
            Subscribe
          </button>
        </div>
      </div>

      {/* Links */}
      <div className="py-12 px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left ml-60 container mx-auto">
        <div>
          <h4 className="font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Updates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-700/50 text-sm text-blue-300 text-center py-6">
        © {new Date().getFullYear()} CipherSolutions. All rights reserved.
      </div>
    </footer>
  );
}
