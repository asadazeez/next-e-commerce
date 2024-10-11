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
          key={index}className=" hover:text-violet-600  text-sm josefin-sans-unique "  href={item.link}> {item.name} </Link>
        ))}
      </div>
    );
  }
  
  export default FooterSide;
  