"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutDashboard, FileText, MessageSquare, MapPin, User, ChevronRight, Bell, LogOut, Plane } from "lucide-react";
import { demoApplications } from "@/lib/data";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: FileText, label: "Applications", id: "applications" },
  { icon: MessageSquare, label: "Messages", id: "messages" },
  { icon: MapPin, label: "Saved Destinations", id: "destinations" },
  { icon: Plane, label: "Upcoming Trips", id: "trips" },
  { icon: User, label: "Profile", id: "profile" },
];

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="pt-20 min-h-screen bg-ivory-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
        <div className="demo-badge mb-6">Demo — Customer portal is a concept demonstration</div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-6">
          <aside className="bg-white p-4 shadow-sm h-fit lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-6 p-3 bg-ivory-50">
              <div className="w-10 h-10 bg-charcoal-900 flex items-center justify-center text-white text-sm font-semibold">AO</div>
              <div>
                <div className="text-sm font-medium text-charcoal-900">Adaeze Okonkwo</div>
                <div className="text-[10px] text-slate-400">adaeze@email.com</div>
              </div>
            </div>
            <nav className="space-y-1">
              {sidebarItems.map(item => (
                <button key={item.id} onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                    activeTab === item.id ? "bg-charcoal-900 text-white" : "text-slate-500 hover:bg-ivory-50 hover:text-charcoal-900"
                  }`}>
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-slate-400 hover:text-red-500 transition-colors">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          </aside>

          <main className="min-w-0">
            {activeTab === "dashboard" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="text-2xl text-charcoal-900">Welcome back, Adaeze</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Active Applications", value: "1", color: "bg-charcoal-900" },
                    { label: "Documents Pending", value: "2", color: "bg-amber-500" },
                    { label: "Messages", value: "0", color: "bg-slate-600" },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white p-5 shadow-sm">
                      <div className={`text-3xl font-semibold text-charcoal-900 mb-1`}>{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-charcoal-900 mb-4">Active Applications</h3>
                  {demoApplications.filter(a => a.id === "SK-DEMO-10428").map(app => (
                    <div key={app.id} className="flex items-center gap-4 p-4 bg-ivory-50">
                      <div className="w-10 h-10 bg-charcoal-900 text-white flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-charcoal-900">{app.service}</div>
                        <div className="text-xs text-slate-400">{app.destination} · {app.id}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-medium text-amber-600 mb-1">{app.status}</div>
                        <div className="w-20 h-1 bg-slate-100">
                          <div className="h-full bg-sukom-500" style={{ width: `${app.progress}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 p-4 bg-amber-50 border border-amber-100">
                    <div className="text-xs font-medium text-amber-700 mb-1">Next Action Required</div>
                    <div className="text-sm text-amber-600">Upload proof of accommodation for your UK Visitor Visa application.</div>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-charcoal-900 mb-4">Saved Destinations</h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {["United Kingdom", "Canada", "Dubai"].map(dest => (
                      <div key={dest} className="flex items-center gap-3 p-3 bg-ivory-50">
                        <MapPin className="w-4 h-4 text-sukom-500" />
                        <span className="text-sm text-charcoal-900">{dest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "applications" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-2xl text-charcoal-900 mb-6">My Applications</h2>
                <div className="bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="text-left py-3 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Reference</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Service</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Progress</th>
                        </tr>
                      </thead>
                      <tbody>
                        {demoApplications.filter(a => a.id === "SK-DEMO-10428").map(app => (
                          <tr key={app.id} className="border-b border-slate-50 hover:bg-ivory-50">
                            <td className="py-3 px-4 font-medium text-charcoal-900">{app.id}</td>
                            <td className="py-3 px-4 text-slate-600">{app.service}</td>
                            <td className="py-3 px-4"><span className="text-xs font-medium px-2 py-1 bg-amber-50 text-amber-600">{app.status}</span></td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <div className="w-16 h-1 bg-slate-100"><div className="h-full bg-sukom-500" style={{ width: `${app.progress}%` }} /></div>
                                <span className="text-xs text-slate-400">{app.progress}%</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "messages" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-2xl text-charcoal-900 mb-6">Messages</h2>
                <div className="bg-white p-12 text-center shadow-sm">
                  <MessageSquare className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                  <p className="text-slate-400">No messages yet. Your Sukom advisor will reach out when there are updates.</p>
                </div>
              </motion.div>
            )}

            {(activeTab === "destinations" || activeTab === "trips" || activeTab === "profile") && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-2xl text-charcoal-900 mb-6 capitalize">{activeTab === "profile" ? "My Profile" : activeTab.replace("-", " ")}</h2>
                <div className="bg-white p-12 text-center shadow-sm">
                  <div className="w-12 h-12 bg-slate-100 mx-auto mb-4 flex items-center justify-center">
                    {sidebarItems.find(s => s.id === activeTab) && (() => {
                      const Icon = sidebarItems.find(s => s.id === activeTab)!.icon;
                      return <Icon className="w-6 h-6 text-slate-300" />;
                    })()}
                  </div>
                  <p className="text-slate-400 text-sm">This section is part of the portal demo.</p>
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
