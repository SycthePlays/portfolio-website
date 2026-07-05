export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 w-full py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-display-lg text-body-md text-primary font-bold">Danish Ahmad Satria</div>
          <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left max-w-xs">
            © 2024 Danish Ahmad Satria. Built with Digital Craftsmanship.
          </p>
        </div>
        <div className="flex gap-8">
          {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map(link => (
            <a
              key={link}
              href={link === 'Email' ? 'mailto:hello@danishahmad.com' : '#'}
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary-fixed transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
