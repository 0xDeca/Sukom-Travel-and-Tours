"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard, FileText, Users, UserPlus, BarChart3, Settings,
  Search, Bell, ChevronDown, Eye, ArrowUpRight, MessageSquare, Plane, Calendar, MapPin
} from "lucide-react";
import { demoApplications, demoLeads, demoStaff, demoAnalytics } from "@/lib/data";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "overview" },
  { icon: FileText, label: "Applications", id: "applications" },
  { icon: Users, label: "Staff", id: "staff" },
  { icon: UserPlus, label: "CRM / Leads", id: "crm" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Settings, label: "CMS", id: "cms" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="demo-badge ml-6 mt-6">Demo — Admin dashboard is a concept demonstration</div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
        <div className="grid lg:grid-cols-[220px_1fr] gap-6">
          <aside className="bg-charcoal-900 p-4 h-fit lg:sticky lg:top-28">
            <div className="flex items-center gap-2 mb-8 px-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-charcoal-900 font-bold text-xs tracking-wider">S</span>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.15em] text-white">SUKOM</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-wider">Admin</div>
              </div>
            </div>
            <nav className="space-y-1">
              {navItems.map(item => (
                <button key={item.id} onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                    activeTab === item.id ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}>
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="min-w-0">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-semibold text-charcoal-900">
                {navItems.find(n => n.id === activeTab)?.label || "Dashboard"}
              </h1>
              <div className="flex items-center gap-3">
                <div className="relative hidden sm:block">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input className="input-field pl-9 py-2.5 text-sm w-64" placeholder="Search..." />
                </div>
                <button className="w-10 h-10 bg-white flex items-center justify-center relative shadow-sm">
                  <Bell className="w-4 h-4 text-slate-500" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                </button>
              </div>
            </div>

            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "New Enquiries", value: "12", change: "+3 today", icon: MessageSquare, color: "text-blue-500" },
                    { label: "Active Applications", value: "47", change: "8 in review", icon: FileText, color: "text-charcoal-600" },
                    { label: "Pending Documents", value: "18", change: "5 overdue", icon: FileText, color: "text-amber-500" },
                    { label: "Consultations", value: "6", change: "3 this week", icon: Calendar, color: "text-green-500" },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        <span className="text-[10px] text-slate-400">{stat.change}</span>
                      </div>
                      <div className="text-2xl font-semibold text-charcoal-900">{stat.value}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-charcoal-900">Recent Applications</h3>
                      <button onClick={() => setActiveTab("applications")} className="text-xs text-sukom-500 hover:underline">View all</button>
                    </div>
                    <div className="space-y-3">
                      {demoApplications.slice(0, 4).map(app => (
                        <div key={app.id} className="flex items-center gap-3 p-3 hover:bg-ivory-50 transition-colors">
                          <div className="w-8 h-8 bg-charcoal-100 text-charcoal-600 flex items-center justify-center shrink-0 text-xs font-semibold">
                            {app.applicant.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-charcoal-900 truncate">{app.applicant}</div>
                            <div className="text-[10px] text-slate-400">{app.service} · {app.id}</div>
                          </div>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 ${
                            app.status === "New" ? "bg-blue-50 text-blue-600" :
                            app.status === "Completed" ? "bg-green-50 text-green-600" :
                            "bg-amber-50 text-amber-600"
                          }`}>{app.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-charcoal-900">Recent Leads</h3>
                      <button onClick={() => setActiveTab("crm")} className="text-xs text-sukom-500 hover:underline">View all</button>
                    </div>
                    <div className="space-y-3">
                      {demoLeads.slice(0, 4).map(lead => (
                        <div key={lead.id} className="flex items-center gap-3 p-3 hover:bg-ivory-50 transition-colors">
                          <div className="w-8 h-8 bg-sukom-100 text-sukom-600 flex items-center justify-center shrink-0 text-xs font-semibold">
                            {lead.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-charcoal-900 truncate">{lead.name}</div>
                            <div className="text-[10px] text-slate-400">{lead.service} · {lead.source}</div>
                          </div>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 ${
                            lead.status === "New" ? "bg-blue-50 text-blue-600" :
                            lead.status === "Converted" ? "bg-green-50 text-green-600" :
                            "bg-slate-100 text-slate-600"
                          }`}>{lead.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-charcoal-900 mb-4">Tour & Flight Requests</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-ivory-50">
                      <div className="flex items-center gap-2 mb-2">
                        <Plane className="w-4 h-4 text-sukom-500" />
                        <span className="text-sm font-medium text-charcoal-900">Flight Requests</span>
                      </div>
                      <div className="text-2xl font-semibold text-charcoal-900">8</div>
                      <div className="text-[10px] text-slate-400">3 pending review</div>
                    </div>
                    <div className="p-4 bg-ivory-50">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-sukom-500" />
                        <span className="text-sm font-medium text-charcoal-900">Tour Enquiries</span>
                      </div>
                      <div className="text-2xl font-semibold text-charcoal-900">14</div>
                      <div className="text-[10px] text-slate-400">5 new this week</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "applications" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="bg-white shadow-sm">
                  <div className="p-4 border-b border-slate-100 flex flex-wrap items-center gap-3">
                    <select className="input-field py-2 text-xs w-auto">
                      <option>All Statuses</option>
                      <option>New</option>
                      <option>Under Review</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                    </select>
                    <select className="input-field py-2 text-xs w-auto">
                      <option>All Services</option>
                      <option>UK Visitor Visa</option>
                      <option>Canada Study Permit</option>
                      <option>US B1/B2 Visa</option>
                    </select>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-100">
                          {["Applicant", "Service", "Destination", "Status", "Staff", "Updated", "Action"].map(h => (
                            <th key={h} className="text-left py-3 px-4 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {demoApplications.map(app => (
                          <tr key={app.id} className="border-b border-slate-50 hover:bg-ivory-50 cursor-pointer">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 bg-charcoal-100 text-charcoal-600 flex items-center justify-center text-[10px] font-semibold shrink-0">
                                  {app.applicant.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-charcoal-900">{app.applicant}</div>
                                  <div className="text-[10px] text-slate-400">{app.id}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-slate-600">{app.service}</td>
                            <td className="py-3 px-4 text-slate-600">{app.destination}</td>
                            <td className="py-3 px-4">
                              <span className={`text-[10px] font-semibold px-2 py-1 ${
                                app.status === "New" ? "bg-blue-50 text-blue-600" :
                                app.status === "Completed" ? "bg-green-50 text-green-600" :
                                app.status === "Under Review" ? "bg-amber-50 text-amber-600" :
                                "bg-slate-100 text-slate-600"
                              }`}>{app.status}</span>
                            </td>
                            <td className="py-3 px-4 text-slate-600 text-xs">{app.assignedStaff}</td>
                            <td className="py-3 px-4 text-slate-400 text-xs">{app.updated}</td>
                            <td className="py-3 px-4">
                              <button className="text-sukom-500 hover:underline text-xs flex items-center gap-1">
                                View <ArrowUpRight className="w-3 h-3" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "staff" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {demoStaff.map(staff => (
                    <div key={staff.id} className="bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-charcoal-900 text-white flex items-center justify-center text-sm font-semibold">
                          {staff.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-charcoal-900">{staff.name}</div>
                          <div className="text-[10px] text-slate-400">{staff.role}</div>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-slate-500">
                        <div className="flex justify-between"><span>Department</span><span className="text-charcoal-900">{staff.department}</span></div>
                        <div className="flex justify-between"><span>Active Cases</span><span className="text-charcoal-900 font-semibold">{staff.activeCases}</span></div>
                        <div className="flex justify-between"><span>Email</span><span className="text-charcoal-900">{staff.email}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "crm" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="grid grid-cols-5 gap-3 mb-6">
                  {["New", "Contacted", "Qualified", "Converted", "Lost"].map(status => (
                    <div key={status} className="bg-white p-4 shadow-sm text-center">
                      <div className="text-lg font-semibold text-charcoal-900">
                        {demoLeads.filter(l => l.status === status).length}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">{status}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-100">
                          {["Lead", "Service", "Source", "Status", "Date", "Notes"].map(h => (
                            <th key={h} className="text-left py-3 px-4 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {demoLeads.map(lead => (
                          <tr key={lead.id} className="border-b border-slate-50 hover:bg-ivory-50">
                            <td className="py-3 px-4">
                              <div className="text-sm font-medium text-charcoal-900">{lead.name}</div>
                              <div className="text-[10px] text-slate-400">{lead.email}</div>
                            </td>
                            <td className="py-3 px-4 text-slate-600 text-xs">{lead.service}</td>
                            <td className="py-3 px-4 text-slate-600 text-xs">{lead.source}</td>
                            <td className="py-3 px-4">
                              <span className={`text-[10px] font-semibold px-2 py-1 ${
                                lead.status === "New" ? "bg-blue-50 text-blue-600" :
                                lead.status === "Converted" ? "bg-green-50 text-green-600" :
                                "bg-slate-100 text-slate-600"
                              }`}>{lead.status}</span>
                            </td>
                            <td className="py-3 px-4 text-slate-400 text-xs">{lead.date}</td>
                            <td className="py-3 px-4 text-slate-500 text-xs max-w-[200px] truncate">{lead.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "analytics" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="bg-amber-50 border border-amber-100 p-4 text-sm text-amber-700">
                  All analytics shown are demonstration data and do not represent actual Sukom performance.
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    { label: "Website Enquiries", value: demoAnalytics.totalEnquiries },
                    { label: "Visa Applications", value: demoAnalytics.visaApplications },
                    { label: "Tour Enquiries", value: demoAnalytics.tourEnquiries },
                    { label: "Consultations", value: demoAnalytics.consultations },
                    { label: "Conversion Rate", value: `${demoAnalytics.conversionRate}%` },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white p-5 shadow-sm">
                      <div className="text-2xl font-semibold text-charcoal-900">{stat.value}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-charcoal-900 mb-6">Monthly Trends (Demo Data)</h3>
                  <div className="space-y-4">
                    {demoAnalytics.monthlyData.map(month => (
                      <div key={month.month} className="flex items-center gap-4">
                        <span className="text-xs text-slate-400 w-8">{month.month}</span>
                        <div className="flex-1 flex items-center gap-2">
                          <div className="flex-1 bg-slate-50 h-6 relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 bg-charcoal-600" style={{ width: `${(month.enquiries / 160) * 100}%` }} />
                          </div>
                          <span className="text-[10px] text-slate-400 w-8">{month.enquiries}</span>
                        </div>
                        <div className="flex-1 flex items-center gap-2">
                          <div className="flex-1 bg-slate-50 h-6 relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 bg-sukom-500" style={{ width: `${(month.applications / 100) * 100}%` }} />
                          </div>
                          <span className="text-[10px] text-slate-400 w-8">{month.applications}</span>
                        </div>
                        <div className="flex-1 flex items-center gap-2">
                          <div className="flex-1 bg-slate-50 h-6 relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 bg-green-500" style={{ width: `${(month.tours / 40) * 100}%` }} />
                          </div>
                          <span className="text-[10px] text-slate-400 w-8">{month.tours}</span>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center gap-4 text-[10px] text-slate-400 pt-2">
                      <span className="w-8" />
                      <span className="flex items-center gap-1"><span className="w-2 h-2 bg-charcoal-600" /> Enquiries</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 bg-sukom-500" /> Applications</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500" /> Tours</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "cms" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="bg-white p-6 shadow-sm mb-6">
                  <h3 className="text-sm font-semibold text-charcoal-900 mb-4">Content Management</h3>
                  <p className="text-sm text-slate-500 mb-6">Manage your website content without needing a developer.</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { label: "Destinations", count: 7, icon: "🌍" },
                      { label: "Visa Information", count: 7, icon: "📋" },
                      { label: "Tour Packages", count: 5, icon: "🗺️" },
                      { label: "Articles", count: 6, icon: "📝" },
                      { label: "FAQs", count: 12, icon: "❓" },
                      { label: "Services", count: 4, icon: "🎯" },
                    ].map(item => (
                      <div key={item.label} className="flex items-center justify-between p-4 bg-ivory-50 hover:bg-ivory-100 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{item.icon}</span>
                          <div>
                            <div className="text-sm font-medium text-charcoal-900">{item.label}</div>
                            <div className="text-[10px] text-slate-400">{item.count} items</div>
                          </div>
                        </div>
                        <button className="text-xs text-sukom-500 hover:underline">Manage</button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
