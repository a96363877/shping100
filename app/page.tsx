"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ShoppingCart,
  Search,
  Star,
  Crown,
  Heart,
  User,
  Menu,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Gift,
  Truck,
  Shield,
  Award,
} from "lucide-react"

export default function VIPShoppingSite() {
  const [cartItems, setCartItems] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])

  const addToCart = () => {
    setCartItems((prev) => prev + 1)
  }

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const featuredProducts = [
    {
      id: 1,
      name: "ساعة ذهبية فاخرة",
      price: "2,500 دينار",
      originalPrice: "3,200 دينار",
      image: "https://img.kwcdn.com/product/fancy/13993ae7-f05d-46b4-bfab-2251d073c385.jpg?imageView2/2/w/375/q/80/format/webp",
      rating: 4.9,
      isVIP: true,
      discount: "22%",
    },
    {
      id: 2,
      name: "حقيبة جلدية إيطالية",
      price: "18,00 دينار",
      originalPrice: "2,400 دينار",
      image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/02fb97d3e85b86af0c0c20f41c8f7870.jpg?imageView2/2/w/375/q/80/format/webp",
      rating: 4.8,
      isVIP: true,
      discount: "25%",
    },
    {
      id: 3,
      name: "عطر فرنسي أصلي",
      price: "85 دينار",
      originalPrice: "1,100 دينار",
      image: "https://img.kwcdn.com/product/fancy/1e30684f-97b3-4f3a-b2c7-0112c29815b7.jpg?imageView2/2/w/800/q/70/format/webp",
      rating: 4.7,
      isVIP: false,
      discount: "23%",
    },
    {
      id: 4,
      name: "مجوهرات ماسية",
      price: "52,00 دينار",
      originalPrice: "6,800 دينار",
      image: "https://img.kwcdn.com/product/fancy/a89362cc-ef76-41ca-a258-4f87f19af99f.jpg?imageView2/2/w/800/q/70/format/webp",
      rating: 5.0,
      isVIP: true,
      discount: "24%",
    },
  ]

  const categories = [
    { name: "مجوهرات", icon: "💎", count: "250+ منتج" },
    { name: "ساعات", icon: "⌚", count: "180+ منتج" },
    { name: "حقائب", icon: "👜", count: "320+ منتج" },
    { name: "عطور", icon: "🌸", count: "150+ منتج" },
    { name: "أزياء", icon: "👗", count: "500+ منتج" },
    { name: "إكسسوارات", icon: "💍", count: "200+ منتج" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-amber-200">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex justify-between items-center py-2 text-sm border-b border-gray-200">
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>info@vipstore.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-500" />
              <span className="text-amber-600 font-semibold">عضوية VIP مجانية للطلبات فوق 100 دينار</span>
            </div>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Crown className="w-8 h-8 text-amber-500" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                  متجر VIP
                </h1>
              </div>

              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">
                  الرئيسية
                </a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">
                  المنتجات
                </a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">
                  VIP
                </a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">
                  العروض
                </a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">
                  اتصل بنا
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
             

              <Button variant="ghost" size="icon" className="relative">
                <Heart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">{favorites.length}</Badge>
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs">{cartItems}</Badge>
              </Button>

              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>

              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-amber-300" />
                <span className="text-amber-200 font-medium">تجربة تسوق VIP حصرية</span>
              </div>
              <h2 className="text-5xl font-bold leading-tight">
                اكتشف عالم
                <span className="block text-amber-300">الرفاهية والأناقة</span>
              </h2>
              <p className="text-xl text-amber-100 leading-relaxed">
                مجموعة حصرية من أفخر المنتجات العالمية بأسعار استثنائية لعملائنا المميزين
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 font-semibold">
                  تسوق الآن
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-white text-amber-700 hover:text-amber-700"
                >
                  المزيد  من المنتجات
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/app.png" alt="تسوق فاخر" className="rounded-lg shadow-2xl" />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                خصم 50%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">مزايا عضوية VIP</h3>
            <p className="text-gray-600 text-lg">استمتع بتجربة تسوق استثنائية مع مزايا حصرية</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">شحن مجاني</h4>
              <p className="text-gray-600 text-sm">شحن مجاني لجميع الطلبات</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Gift className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">هدايا حصرية</h4>
              <p className="text-gray-600 text-sm">هدايا مجانية مع كل طلب</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">ضمان مدى الحياة</h4>
              <p className="text-gray-600 text-sm">ضمان شامل على جميع المنتجات</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">خصومات حصرية</h4>
              <p className="text-gray-600 text-sm">خصومات تصل إلى 70%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">تسوق حسب الفئة</h3>
            <p className="text-gray-600 text-lg">اكتشف مجموعتنا المتنوعة من المنتجات الفاخرة</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group border-amber-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-1">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">المنتجات المميزة</h3>
            <p className="text-gray-600 text-lg">أحدث وأفخر المنتجات المختارة خصيصاً لك</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-amber-200">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {product.isVIP && (
                      <Badge className="bg-amber-500 text-white">
                        <Crown className="w-3 h-3 mr-1" />
                        VIP
                      </Badge>
                    )}
                    <Badge className="bg-red-500 text-white">{product.discount}</Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 left-3 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart
                      className={`w-4 h-4 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h4>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 mr-1">({product.rating})</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-amber-600">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white" onClick={addToCart}>
                    أضف للسلة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
            >
              عرض جميع المنتجات
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">اشترك في النشرة الإخبارية</h3>
          <p className="text-amber-100 text-lg mb-8">احصل على أحدث العروض والمنتجات الجديدة</p>

          <div className="max-w-md mx-auto flex gap-4">
            <Input placeholder="أدخل بريدك الإلكتروني" className="bg-white text-gray-800 border-0" />
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">اشتراك</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Crown className="w-8 h-8 text-amber-500" />
                <h4 className="text-2xl font-bold">متجر VIP</h4>
              </div>
              <p className="text-gray-400 mb-6">وجهتك الأولى للتسوق الفاخر والمنتجات عالية الجودة بأفضل الأسعار</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">روابط سريعة</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    سياسة الخصوصية
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    الشروط والأحكام
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    سياسة الإرجاع
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">خدمة العملاء</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    اتصل بنا
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    الأسئلة الشائعة
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    تتبع الطلب
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    الدعم الفني
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">معلومات التواصل</h5>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>عمان ,الاردن</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+962 65 222 111</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@vipstore.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 متجر VIP. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
