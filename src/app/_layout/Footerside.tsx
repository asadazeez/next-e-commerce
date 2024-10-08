import Link from "next/link";

const footerLink = [
    { name: "LOGIN", link: "login" },
    { name: "SHOP", link: "shop" },
    { name: "CONTACT", link: "contact" },
  ];
  function FooterSide() {
    return (
      <div className=" space-x-2">
        {footerLink.map((item, index) => (
          
          <Link 
          key={index}className="text-white hover:text-yellow hover:font-semibold"  href={item.link}> {item.name} </Link>
        ))}
      </div>
    );
  }
  
  export default FooterSide;
  