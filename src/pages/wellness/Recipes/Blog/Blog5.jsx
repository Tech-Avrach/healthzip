"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Flame, Croissant, Soup, Zap, Thermometer, BookOpen, Star, Scale, ChevronDown, ChevronUp } from "lucide-react"

export default function RecipeTypesGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Overview")
    const [expandedSection, setExpandedSection] = useState(null)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Overview", "Quick Meals", "Slow Cooking", "Baking", "Meal Prep"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Recipe Types: Quick Meals, Slow Cook, Baking, and More
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                            activeTab === tab
                                                ? "border-blue-500 text-blue-600"
                                                : "border-transparent text-gray-600 hover:text-gray-900"
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Date and Intro */}
                            <div className="flex items-center text-gray-500 mb-4">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span className="text-sm">Updated on June 15, 2024</span>
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">12 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Explore comprehensive cooking options including 30-minute meals, slow cooker recipes, baking fundamentals, meal prep dishes, and emerging cooking methods for optimal nutrition and flavor. This guide will help you navigate different cooking techniques to match your lifestyle and culinary goals.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrlwQiHIHGvNv6X4IkijYTCWMifwMgJPLaQ&s"
                                    alt="Variety of cooking methods and ingredients"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Quick meals save time but may sacrifice depth of flavor</li>
                                    <li>Slow cooking enhances taste and tenderness with minimal effort</li>
                                    <li>Baking requires precision but offers consistent results</li>
                                    <li>Meal prep can save 3-5 hours weekly on cooking time</li>
                                    <li>Each method has unique nutritional impacts on ingredients</li>
                                    <li>Hybrid approaches combine multiple techniques for optimal results</li>
                                </ul>
                            </div>

                            {/* Why Cooking Methods Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Flame className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Cooking Methods Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The way you cook food affects more than just taste—it impacts nutritional value, texture, appearance, and even food safety. According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Culinary Science</a>, cooking methods can alter the bioavailability of nutrients by up to 40%.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Zap className="w-5 h-5 text-blue-600 mr-2" />
                                            Nutrient Retention
                                        </h3>
                                        <p className="text-gray-700">
                                            Water-soluble vitamins (B, C) are preserved best with quick cooking methods like steaming, while fat-soluble vitamins (A, D, E, K) benefit from slow cooking with fats.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Thermometer className="w-5 h-5 text-blue-600 mr-2" />
                                            Flavor Development
                                        </h3>
                                        <p className="text-gray-700">
                                            Maillard reactions (browning) occur best at 140-165°C (284-329°F), while slow cooking breaks down collagen into gelatin for richer mouthfeel.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cooking Method Matrix</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skill Level</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nutrient Retention</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Quick Cooking</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">5-30 min</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">Beginner</td>
                                                    <td className="px-4 py-3">Weeknights, fresh veggies</td>
                                                    <td className="px-4 py-3">High (water-soluble)</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Slow Cooking</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">4-10 hrs</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">Intermediate</td>
                                                    <td className="px-4 py-3">Tough cuts, stews</td>
                                                    <td className="px-4 py-3">Medium (fat-soluble)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Baking</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">15 min-3 hrs</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">Advanced</td>
                                                    <td className="px-4 py-3">Breads, desserts</td>
                                                    <td className="px-4 py-3">Variable</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Quick Meals Section */}
                            <section className="mb-12">
                                <div 
                                    className="flex justify-between items-center cursor-pointer mb-4"
                                    onClick={() => toggleSection('quickMeals')}
                                >
                                    <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                                        <Zap className="w-8 h-8 text-blue-600 mr-2" />
                                        30-Minute Meals: Fast & Flavorful
                                    </h2>
                                    {expandedSection === 'quickMeals' ? (
                                        <ChevronUp className="w-6 h-6 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-500" />
                                    )}
                                </div>

                                {expandedSection === 'quickMeals' && (
                                    <div className="space-y-6">
                                        <p className="text-gray-700">
                                            Quick meals are the backbone of weekday cooking, designed to deliver maximum flavor with minimal time investment. The key lies in preparation and technique rather than long cooking times.
                                        </p>

                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Essential Quick Cooking Techniques</h3>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                                <li><strong>Sautéing:</strong> High heat, small cuts, constant movement (2-5 min)</li>
                                                <li><strong>Stir-frying:</strong> Even higher heat with oil (3-7 min)</li>
                                                <li><strong>Broiling:</strong> Direct top-down heat for quick browning (4-10 min)</li>
                                                <li><strong>Pressure cooking:</strong> Modern electric models cook 70% faster</li>
                                            </ul>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">Pros of Quick Cooking</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                    <li>Preserves vegetable crunch and color</li>
                                                    <li>Retains more vitamin C and B vitamins</li>
                                                    <li>Ideal for fresh, high-quality ingredients</li>
                                                    <li>Minimal equipment needed</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">Cons of Quick Cooking</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                    <li>Less flavor development</li>
                                                    <li>Not suitable for tough cuts of meat</li>
                                                    <li>Requires more active cooking time</li>
                                                    <li>Limited time for complex reactions</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                            <h3 className="font-bold text-gray-900 mb-2">Chef's Tip:</h3>
                                            <p className="text-gray-700">
                                                "For fastest meals, prep ingredients before heating the pan—this 'mise en place' approach cuts active cooking time by 30%. Keep a pantry stocked with quick-cooking proteins (shrimp, chicken cutlets) and pre-cut frozen vegetables."
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Sample Quick Meal Plan</h3>
                                            <div className="space-y-4">
                                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                                    <div className="bg-blue-600 px-4 py-2">
                                                        <h4 className="font-bold text-white">Monday: Lemon Garlic Shrimp</h4>
                                                    </div>
                                                    <div className="p-4">
                                                        <p className="text-gray-700"><strong>Time:</strong> 15 min | <strong>Tools:</strong> Skillet</p>
                                                        <p className="text-gray-700"><strong>Ingredients:</strong> Shrimp, garlic, lemon, parsley, olive oil</p>
                                                    </div>
                                                </div>
                                                {/* More quick meal examples... */}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </section>

                            {/* Slow Cooking Section */}
                            <section className="mb-12">
                                <div 
                                    className="flex justify-between items-center cursor-pointer mb-4"
                                    onClick={() => toggleSection('slowCooking')}
                                >
                                    <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                                        <Soup className="w-8 h-8 text-blue-600 mr-2" />
                                        Slow Cooking: Depth of Flavor
                                    </h2>
                                    {expandedSection === 'slowCooking' ? (
                                        <ChevronUp className="w-6 h-6 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-500" />
                                    )}
                                </div>

                                {expandedSection === 'slowCooking' && (
                                    <div className="space-y-6">
                                        <p className="text-gray-700">
                                            Slow cooking transforms tough, inexpensive cuts of meat into tender delicacies while developing complex flavors through prolonged heat exposure. Modern slow cookers maintain temperatures between 79-93°C (175-200°F), perfect for breaking down collagen without overcooking.
                                        </p>

                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Slow Cooking Temperature Guide</h3>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full bg-white">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Setting</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Temperature</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Time Range</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Best Uses</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="px-4 py-2">Low</td>
                                                            <td className="px-4 py-2">79-82°C (175-180°F)</td>
                                                            <td className="px-4 py-2">8-10 hours</td>
                                                            <td className="px-4 py-2">Tough meats, beans</td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td className="px-4 py-2">High</td>
                                                            <td className="px-4 py-2">88-93°C (190-200°F)</td>
                                                            <td className="px-4 py-2">4-6 hours</td>
                                                            <td className="px-4 py-2">Root vegetables, quicker cooks</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">Slow Cooking Advantages</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                    <li>Converts collagen to gelatin (perfect for ribs, chuck roast)</li>
                                                    <li>Allows flavors to marry and deepen</li>
                                                    <li>Energy efficient (uses about as much as a light bulb)</li>
                                                    <li>Hands-off cooking time</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">Common Mistakes</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                    <li>Overfilling the cooker (max 2/3 capacity)</li>
                                                    <li>Adding dairy too early (curdles)</li>
                                                    <li>Lifting lid unnecessarily (loses heat)</li>
                                                    <li>Using lean meats (becomes dry)</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Slow Cooker Conversion Chart</h3>
                                            <p className="text-gray-700 mb-2">Adapt your favorite oven recipes for the slow cooker:</p>
                                            <div className="grid grid-cols-3 gap-4 text-center font-medium border-b border-gray-200 pb-2">
                                                <div>Oven Temp</div>
                                                <div>Oven Time</div>
                                                <div>Slow Cooker Time</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 text-center py-2 border-b border-gray-200">
                                                <div>150°C (300°F)</div>
                                                <div>1 hour</div>
                                                <div>4-6 hours high</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 text-center py-2">
                                                <div>180°C (350°F)</div>
                                                <div>1 hour</div>
                                                <div>6-8 hours low</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </section>

                            {/* Baking Section */}
                            <section className="mb-12">
                                <div 
                                    className="flex justify-between items-center cursor-pointer mb-4"
                                    onClick={() => toggleSection('baking')}
                                >
                                    <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                                        <Croissant className="w-8 h-8 text-blue-600 mr-2" />
                                        Baking: The Science of Precision
                                    </h2>
                                    {expandedSection === 'baking' ? (
                                        <ChevronUp className="w-6 h-6 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-500" />
                                    )}
                                </div>

                                {expandedSection === 'baking' && (
                                    <div className="space-y-6">
                                        <p className="text-gray-700">
                                            Baking differs from other cooking methods in its reliance on exact measurements, chemical reactions, and controlled heat environments. Unlike stovetop cooking where adjustments are made by sight, baking success depends on understanding ingredient functions and ratios.
                                        </p>

                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Essential Baking Ratios</h3>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full bg-white">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Item</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Flour Ratio</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Liquid Ratio</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Fat Ratio</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="px-4 py-2">Bread</td>
                                                            <td className="px-4 py-2">100%</td>
                                                            <td className="px-4 py-2">60-75%</td>
                                                            <td className="px-4 py-2">0-5%</td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td className="px-4 py-2">Cake</td>
                                                            <td className="px-4 py-2">100%</td>
                                                            <td className="px-4 py-2">60%</td>
                                                            <td className="px-4 py-2">50%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-4 py-2">Cookie</td>
                                                            <td className="px-4 py-2">100%</td>
                                                            <td className="px-4 py-2">20%</td>
                                                            <td className="px-4 py-2">65%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">Baking Fundamentals</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                    <li><strong>Gluten development:</strong> More mixing = chewier texture</li>
                                                    <li><strong>Leavening agents:</strong> Baking powder vs soda</li>
                                                    <li><strong>Temperature control:</strong> Room temp ingredients mix better</li>
                                                    <li><strong>Oven spring:</strong> Initial high heat for bread rise</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">Common Baking Failures</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                    <li><strong>Dense cakes:</strong> Overmixing or old leaveners</li>
                                                    <li><strong>Burnt edges:</strong> Wrong pan size or dark pans</li>
                                                    <li><strong>Sunken centers:</strong> Underbaking or oven door opened</li>
                                                    <li><strong>Tough crust:</strong> Too much flour in shaping</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Baking Temperature Guide</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                                <div className="p-2 border border-gray-200 rounded">
                                                    <p className="font-bold">Item</p>
                                                    <p>Temp (°F)</p>
                                                    <p>Temp (°C)</p>
                                                </div>
                                                <div className="p-2 border border-gray-200 rounded">
                                                    <p className="font-bold">Bread</p>
                                                    <p>375-425</p>
                                                    <p>190-220</p>
                                                </div>
                                                <div className="p-2 border border-gray-200 rounded">
                                                    <p className="font-bold">Cakes</p>
                                                    <p>350-375</p>
                                                    <p>175-190</p>
                                                </div>
                                                <div className="p-2 border border-gray-200 rounded">
                                                    <p className="font-bold">Cookies</p>
                                                    <p>325-375</p>
                                                    <p>160-190</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </section>

                            {/* Meal Prep Section */}
                            <section className="mb-12">
                                <div 
                                    className="flex justify-between items-center cursor-pointer mb-4"
                                    onClick={() => toggleSection('mealPrep')}
                                >
                                    <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                                        <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
                                        Meal Prep: Efficiency Mastery
                                    </h2>
                                    {expandedSection === 'mealPrep' ? (
                                        <ChevronUp className="w-6 h-6 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-500" />
                                    )}
                                </div>

                                {expandedSection === 'mealPrep' && (
                                    <div className="space-y-6">
                                        <p className="text-gray-700">
                                            Meal preparation combines multiple cooking methods to create ready-to-eat meals for the week ahead. When done strategically, it can save 3-5 hours of weekly cooking time while ensuring balanced nutrition and portion control.
                                        </p>

                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Meal Prep Timeline</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-start">
                                                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900">Planning (Day Before)</h4>
                                                        <p className="text-gray-700">Choose recipes, create shopping list, check inventory</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900">Batch Cooking (Prep Day)</h4>
                                                        <p className="text-gray-700">3-4 hour session cooking proteins, grains, veggies</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900">Assembly (Daily)</h4>
                                                        <p className="text-gray-700">5-10 minutes combining prepped components</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">Meal Prep Containers</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                    <li><strong>Glass:</strong> Microwave safe, durable, heavier</li>
                                                    <li><strong>BPA-free plastic:</strong> Lightweight, stackable</li>
                                                    <li><strong>Compartmentalized:</strong> Prevents mixing, portion control</li>
                                                    <li><strong>Freezer-safe:</strong> For longer storage</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">Storage Guidelines</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                    <li><strong>Cooked meat:</strong> 3-4 days fridge, 2-6 months freezer</li>
                                                    <li><strong>Cooked grains:</strong> 4-6 days fridge, 6 months freezer</li>
                                                    <li><strong>Cut vegetables:</strong> 3-5 days fridge (except onions)</li>
                                                    <li><strong>Soups/stews:</strong> 3-4 days fridge, 4-6 months freezer</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Sample Meal Prep Plan</h3>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full bg-white">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Day</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Breakfast</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Lunch</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Dinner</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="px-4 py-2 font-medium">Monday</td>
                                                            <td className="px-4 py-2">Overnight oats</td>
                                                            <td className="px-4 py-2">Chicken quinoa bowl</td>
                                                            <td className="px-4 py-2">Beef stir-fry</td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td className="px-4 py-2 font-medium">Tuesday</td>
                                                            <td className="px-4 py-2">Greek yogurt parfait</td>
                                                            <td className="px-4 py-2">Turkey wrap</td>
                                                            <td className="px-4 py-2">Salmon with roasted veggies</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing Your Cooking Approach</h2>

                                <p className="text-gray-700 mb-4">
                                    The ideal cooking method depends on your schedule, equipment, and culinary goals. Busy professionals might prioritize quick meals and meal prep, while weekend cooks may enjoy slow cooking or baking projects.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hybrid Approach</h3>
                                    <p className="text-gray-700">
                                        Many successful home cooks combine methods—using meal prep to create components that become quick meals during the week, or employing slow cooking for foundations that get finished with quick techniques. For example:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                                        <li>Slow cook pulled pork on Sunday</li>
                                        <li>Use in quick tacos (Monday), sandwiches (Wednesday), fried rice (Friday)</li>
                                        <li>Bake a batch of muffins for breakfasts</li>
                                        <li>Prep chopped veggies for stir-fries</li>
                                    </ul>
                                </div>

                                <p className="text-gray-700">
                                    Understanding these fundamental cooking methods gives you the flexibility to adapt recipes to your schedule while maximizing flavor and nutrition. Start with one new technique each week, and soon you'll have a repertoire that makes every meal both efficient and delicious.
                                </p>
                            </section>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Author Info */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                                    <User className="w-8 h-8 text-gray-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Culinary reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Chef Marco Russo
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Emily Thompson
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on June 15, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">COOKING NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get weekly recipes and techniques</h4>
                                <p className="text-gray-700 text-sm">
                                    Professional tips, seasonal menus, and cooking science delivered to your inbox.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                Your{" "}
                                <a href="#" className="text-blue-600 hover:underline">
                                    privacy
                                </a>{" "}
                                is important to us
                            </p>
                        </div>

                        {/* Popular Recipes */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Recipe Collections</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/quick-meals.jpg" alt="Quick meals" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">30-Minute Dinner Recipes</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (89 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/slow-cooker.jpg" alt="Slow cooker" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Slow Cooker Favorites</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (142 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Conversion Chart */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Method Substitution Guide</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Original Method:</span>
                                    <span className="font-medium">Alternative:</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Slow Cooker (8 hrs)</span>
                                    <span className="text-blue-600">Pressure Cooker (45 min)</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Oven Baking</span>
                                    <span className="text-blue-600">Air Fryer (-25°F, -20% time)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Stovetop Sauté</span>
                                    <span className="text-blue-600">Broiler (watch closely)</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Maillard Reactions</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Essential Kitchen Tools for Each Method</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Converting Family Recipes to Modern Methods</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Seasonal Cooking Method Guide</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}