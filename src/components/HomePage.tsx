import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-r from-purple-800 to-purple-600 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-white text-xl font-bold">Loading Digital Transformation Platform</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header style={{ backgroundColor: '#5F2D91' }} className="sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-white text-xl font-bold">STC Bank DTMP</div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">Home</a>
                <a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">Dashboard</a>
                <a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">Projects</a>
                <a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">Resources</a>
                <a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">Analytics</a>
              </nav>
            </div>
            <button className="px-4 py-2 rounded text-purple-800 bg-white font-medium hover:bg-gray-100 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative" style={{ background: 'linear-gradient(135deg, #5F2D91 0%, #7A4D9E 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              Digital Transformation Management Platform
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Empowering STC Bank's digital transformation journey with comprehensive project management, 
              analytics, and collaboration tools
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 rounded-lg text-white font-medium bg-white bg-opacity-20 hover:bg-opacity-30 transition-all backdrop-blur-sm">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-lg text-white font-medium border-2 border-white hover:bg-white hover:text-purple-800 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div style={{ color: '#5F2D91' }} className="text-4xl font-bold mb-2">45+</div>
              <div className="text-gray-600 text-sm">Active Projects</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div style={{ color: '#5F2D91' }} className="text-4xl font-bold mb-2">87%</div>
              <div className="text-gray-600 text-sm">On-Time Delivery</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div style={{ color: '#5F2D91' }} className="text-4xl font-bold mb-2">250+</div>
              <div className="text-gray-600 text-sm">Team Members</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div style={{ color: '#5F2D91' }} className="text-4xl font-bold mb-2">15%</div>
              <div className="text-gray-600 text-sm">ROI Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Integrated Marketplaces Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wider mb-4" style={{ color: '#5F2D91' }}>6 INTEGRATED MARKETPLACES</p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#000000' }}>
              Six Integrated EA Marketplaces
            </h2>
            <p className="text-base max-w-3xl mx-auto text-gray-600">
              Enterprise-wide services for all STC Bank divisions, organised around the 4D model.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Marketplace 1 - DISCERN */}
            <div className="bg-white rounded-lg border-t-4 shadow-lg overflow-hidden" style={{ borderTopColor: '#3B82F6' }}>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider" style={{ color: '#3B82F6' }}>DISCERN</span>
                </div>
                <div className="mb-4">
                  <div style={{ backgroundColor: '#EFF6FF' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>DTMP Learning Centre</h3>
                <p className="text-sm text-gray-600">
                  Structured pathways for EA literacy, digital transformation fundamentals, and STC Bank architecture standards across all divisions.
                </p>
              </div>
            </div>

            {/* Marketplace 2 - DISCERN */}
            <div className="bg-white rounded-lg border-t-4 shadow-lg overflow-hidden" style={{ borderTopColor: '#3B82F6' }}>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider" style={{ color: '#3B82F6' }}>DISCERN</span>
                </div>
                <div className="mb-4">
                  <div style={{ backgroundColor: '#EFF6FF' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>DTMP Knowledge Centre</h3>
                <p className="text-sm text-gray-600">
                  STC Bank-specific architecture knowledge, governance references, strategy documents, standards, and published design outputs accessible enterprise-wide.
                </p>
              </div>
            </div>

            {/* Marketplace 3 - DESIGN */}
            <div className="bg-white rounded-lg border-t-4 shadow-lg overflow-hidden" style={{ borderTopColor: '#F59E0B' }}>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider" style={{ color: '#F59E0B' }}>DESIGN</span>
                </div>
                <div className="mb-4">
                  <div style={{ backgroundColor: '#FEF3C7' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" style={{ color: '#F59E0B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>DTMP Document Studio</h3>
                <p className="text-sm text-gray-600">
                  AI-powered document generation fulfilled by the Corporate EA Office with defined SLAs for all STC Bank divisions.
                </p>
              </div>
            </div>

            {/* Marketplace 4 - DESIGN */}
            <div className="bg-white rounded-lg border-t-4 shadow-lg overflow-hidden" style={{ borderTopColor: '#F59E0B' }}>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider" style={{ color: '#F59E0B' }}>DESIGN</span>
                </div>
                <div className="mb-4">
                  <div style={{ backgroundColor: '#FEF3C7' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" style={{ color: '#F59E0B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>DTMP Solution Specs</h3>
                <p className="text-sm text-gray-600">
                  Standardised architecture blueprints and solution specifications for common banking transformation patterns.
                </p>
              </div>
            </div>

            {/* Marketplace 5 - DEPLOY */}
            <div className="bg-white rounded-lg border-t-4 shadow-lg overflow-hidden" style={{ borderTopColor: '#10B981' }}>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider" style={{ color: '#10B981' }}>DEPLOY</span>
                </div>
                <div className="mb-4">
                  <div style={{ backgroundColor: '#D1FAE5' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" style={{ color: '#10B981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>DTMP Solution Build</h3>
                <p className="text-sm text-gray-600">
                  Build resources, delivery capacity, and implementation support for transformation initiatives.
                </p>
              </div>
            </div>

            {/* Marketplace 6 - DRIVE */}
            <div className="bg-white rounded-lg border-t-4 shadow-lg overflow-hidden" style={{ borderTopColor: '#EF4444' }}>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider" style={{ color: '#EF4444' }}>DRIVE</span>
                </div>
                <div className="mb-4">
                  <div style={{ backgroundColor: '#FEE2E2' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" style={{ color: '#EF4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>DTMP Lifecycle Management</h3>
                <p className="text-sm text-gray-600">
                  Govern initiatives through stage gates, compliance tracking, and continuous improvement processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ color: '#003A6C' }} className="text-3xl font-bold mb-4">Platform Capabilities</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and features to manage your digital transformation initiatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={{ backgroundColor: '#F3E8FF' }} className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" style={{ color: '#5F2D91' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 style={{ color: '#003A6C' }} className="text-xl font-semibold mb-3">Project Dashboard</h3>
              <p className="text-gray-600 text-sm mb-4">
                Real-time visibility into all transformation projects with progress tracking and milestone management
              </p>
              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline">Learn more →</a>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={{ backgroundColor: '#F3E8FF' }} className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" style={{ color: '#5F2D91' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 style={{ color: '#003A6C' }} className="text-xl font-semibold mb-3">Team Collaboration</h3>
              <p className="text-gray-600 text-sm mb-4">
                Seamless collaboration tools for cross-functional teams with document sharing and task management
              </p>
              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline">Learn more →</a>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={{ backgroundColor: '#F3E8FF' }} className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" style={{ color: '#5F2D91' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 style={{ color: '#003A6C' }} className="text-xl font-semibold mb-3">Resource Library</h3>
              <p className="text-gray-600 text-sm mb-4">
                Centralized repository of templates, best practices, and documentation for transformation initiatives
              </p>
              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline">Learn more →</a>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={{ backgroundColor: '#F3E8FF' }} className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" style={{ color: '#5F2D91' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 style={{ color: '#003A6C' }} className="text-xl font-semibold mb-3">Analytics & Insights</h3>
              <p className="text-gray-600 text-sm mb-4">
                Advanced analytics and reporting capabilities to measure transformation impact and ROI
              </p>
              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline">Learn more →</a>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={{ backgroundColor: '#F3E8FF' }} className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" style={{ color: '#5F2D91' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 style={{ color: '#003A6C' }} className="text-xl font-semibold mb-3">Workflow Automation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Streamline processes with automated workflows, approvals, and notifications
              </p>
              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline">Learn more →</a>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={{ backgroundColor: '#F3E8FF' }} className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" style={{ color: '#5F2D91' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 style={{ color: '#003A6C' }} className="text-xl font-semibold mb-3">Risk Management</h3>
              <p className="text-gray-600 text-sm mb-4">
                Identify, assess, and mitigate risks across all transformation initiatives
              </p>
              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Domains Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ color: '#003A6C' }} className="text-3xl font-bold mb-4">Transformation Domains</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Strategic focus areas driving STC Bank's digital transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Domain 1 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div style={{ backgroundColor: '#F3E8FF' }} className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span style={{ color: '#5F2D91' }} className="text-lg font-bold">01</span>
                </div>
                <div>
                  <h3 style={{ color: '#003A6C' }} className="font-semibold text-lg mb-2">Customer Experience</h3>
                  <p className="text-sm text-gray-600">
                    Enhancing digital touchpoints and customer journey optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Domain 2 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div style={{ backgroundColor: '#F3E8FF' }} className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span style={{ color: '#5F2D91' }} className="text-lg font-bold">02</span>
                </div>
                <div>
                  <h3 style={{ color: '#003A6C' }} className="font-semibold text-lg mb-2">Core Banking Systems</h3>
                  <p className="text-sm text-gray-600">
                    Modernizing banking infrastructure and operations
                  </p>
                </div>
              </div>
            </div>

            {/* Domain 3 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div style={{ backgroundColor: '#F3E8FF' }} className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span style={{ color: '#5F2D91' }} className="text-lg font-bold">03</span>
                </div>
                <div>
                  <h3 style={{ color: '#003A6C' }} className="font-semibold text-lg mb-2">Data & Analytics</h3>
                  <p className="text-sm text-gray-600">
                    Building data-driven decision-making capabilities
                  </p>
                </div>
              </div>
            </div>

            {/* Domain 4 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div style={{ backgroundColor: '#F3E8FF' }} className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span style={{ color: '#5F2D91' }} className="text-lg font-bold">04</span>
                </div>
                <div>
                  <h3 style={{ color: '#003A6C' }} className="font-semibold text-lg mb-2">Security & Compliance</h3>
                  <p className="text-sm text-gray-600">
                    Strengthening cybersecurity and regulatory compliance
                  </p>
                </div>
              </div>
            </div>

            {/* Domain 5 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div style={{ backgroundColor: '#F3E8FF' }} className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span style={{ color: '#5F2D91' }} className="text-lg font-bold">05</span>
                </div>
                <div>
                  <h3 style={{ color: '#003A6C' }} className="font-semibold text-lg mb-2">Innovation & AI</h3>
                  <p className="text-sm text-gray-600">
                    Leveraging artificial intelligence and emerging technologies
                  </p>
                </div>
              </div>
            </div>

            {/* Domain 6 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div style={{ backgroundColor: '#F3E8FF' }} className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span style={{ color: '#5F2D91' }} className="text-lg font-bold">06</span>
                </div>
                <div>
                  <h3 style={{ color: '#003A6C' }} className="font-semibold text-lg mb-2">Digital Workforce</h3>
                  <p className="text-sm text-gray-600">
                    Empowering employees with digital tools and skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Initiatives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ color: '#003A6C' }} className="text-3xl font-bold mb-4">Strategic Initiatives</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Key programs shaping the future of STC Bank
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Initiative 1 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="mb-6">
                <div style={{ backgroundColor: '#5F2D91' }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 style={{ color: '#003A6C' }} className="text-xl font-semibold mb-3">Digital First Strategy</h3>
              <p className="text-gray-600 text-sm">
                Prioritizing digital channels and experiences across all customer interactions
              </p>
            </div>

            {/* Initiative 2 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="mb-6">
                <div style={{ backgroundColor: '#5F2D91' }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 style={{ color: '#003A6C' }} className="text-xl font-semibold mb-3">Innovation Labs</h3>
              <p className="text-gray-600 text-sm">
                Fostering experimentation and rapid prototyping of new banking solutions
              </p>
            </div>

            {/* Initiative 3 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="mb-6">
                <div style={{ backgroundColor: '#5F2D91' }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 style={{ color: '#003A6C' }} className="text-xl font-semibold mb-3">Agile Transformation</h3>
              <p className="text-gray-600 text-sm">
                Adopting agile methodologies for faster delivery and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ color: '#003A6C' }} className="text-3xl font-bold mb-4">Active Transformation Projects</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Track progress and manage key digital transformation initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 style={{ color: '#003A6C' }} className="font-semibold text-lg mb-1">AI Customer Service</h3>
                  <p className="text-sm text-gray-500">Digital Banking</p>
                </div>
                <span style={{ backgroundColor: '#D1FAE5', color: '#065F46' }} className="px-3 py-1 rounded-full text-xs font-medium">
                  On Track
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Implementation of AI-powered chatbot for 24/7 customer support
              </p>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div style={{ backgroundColor: '#5F2D91', width: '65%' }} className="h-2 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Due: Dec 2024</span>
                <button style={{ color: '#5F2D91' }} className="font-medium hover:underline">View Details</button>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 style={{ color: '#003A6C' }} className="font-semibold text-lg mb-1">Mobile Banking App</h3>
                  <p className="text-sm text-gray-500">Customer Experience</p>
                </div>
                <span style={{ backgroundColor: '#D1FAE5', color: '#065F46' }} className="px-3 py-1 rounded-full text-xs font-medium">
                  On Track
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Next-generation mobile banking platform with enhanced security
              </p>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">82%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div style={{ backgroundColor: '#5F2D91', width: '82%' }} className="h-2 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Due: Nov 2024</span>
                <button style={{ color: '#5F2D91' }} className="font-medium hover:underline">View Details</button>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 style={{ color: '#003A6C' }} className="font-semibold text-lg mb-1">Data Analytics Platform</h3>
                  <p className="text-sm text-gray-500">Infrastructure</p>
                </div>
                <span style={{ backgroundColor: '#FEF3C7', color: '#92400E' }} className="px-3 py-1 rounded-full text-xs font-medium">
                  At Risk
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Enterprise data warehouse and analytics infrastructure upgrade
              </p>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div style={{ backgroundColor: '#5F2D91', width: '45%' }} className="h-2 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Due: Jan 2025</span>
                <button style={{ color: '#5F2D91' }} className="font-medium hover:underline">View Details</button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button style={{ backgroundColor: '#5F2D91' }} className="px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#003A6C' }}>
              Contributors to Our DBP
            </h2>
            <p className="text-base max-w-3xl mx-auto text-gray-600">
              Enterprise-wide stakeholders—defined as governors, designers, executors, or contributors—working toward our shared Digital Business Platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Contributor 1 - Transformation Office */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="mb-4">
                <div style={{ backgroundColor: '#FEF3C7' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#F59E0B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#003A6C' }}>Transformation Office</h3>
              <p className="text-sm text-gray-500 mb-4">Enterprise TO Director</p>
              <p className="text-sm text-gray-600 mb-4">
                Drive strategic alignment and ensure DBP governance across all initiatives.
              </p>
              
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">KEY CONTRIBUTIONS</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Enterprise Alignment</li>
                  <li>• DBP Tracking & Oversight</li>
                  <li>• Compliance Enforcement</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">PLATFORM CAPABILITIES</h4>
                <p className="text-sm text-gray-600">TO Operations | Portfolio Oversight | SLA Governance</p>
              </div>

              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline inline-flex items-center gap-1">
                Go to TO Dashboard →
              </a>
            </div>

            {/* Contributor 2 - Strategy & Executive Leadership */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="mb-4">
                <div style={{ backgroundColor: '#F3E8FF' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#5F2D91' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#003A6C' }}>Strategy & Executive Leadership</h3>
              <p className="text-sm text-gray-500 mb-4">CDO, Strategy Leads, Analysts</p>
              <p className="text-sm text-gray-600 mb-4">
                Strategy analysts use DTMP to access transformation insights, request assessments, and build evidence for strategic decisions.
              </p>
              
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">KEY CONTRIBUTIONS</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Strategic Visibility</li>
                  <li>• Portfolio Oversight</li>
                  <li>• Investment Decisions</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">PLATFORM CAPABILITIES</h4>
                <p className="text-sm text-gray-600">Digital Intelligence | Knowledge Center | Document Studio Assessments</p>
              </div>

              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline inline-flex items-center gap-1">
                Explore Insights →
              </a>
            </div>

            {/* Contributor 3 - Business & Technology Architects */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="mb-4">
                <div style={{ backgroundColor: '#DBEAFE' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#003A6C' }}>Business & Technology Architects</h3>
              <p className="text-sm text-gray-500 mb-4">Enterprise & Solution Architects</p>
              <p className="text-sm text-gray-600 mb-4">
                Design and govern platform blueprints and architecture standards.
              </p>
              
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">KEY CONTRIBUTIONS</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Architecture Governance</li>
                  <li>• Blueprint Design</li>
                  <li>• Standards Contribution</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">PLATFORM CAPABILITIES</h4>
                <p className="text-sm text-gray-600">Solution Specs | Knowledge Center | Blueprints</p>
              </div>

              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline inline-flex items-center gap-1">
                Explore Design Resources →
              </a>
            </div>

            {/* Contributor 4 - Project & Product Teams */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="mb-4">
                <div style={{ backgroundColor: '#D1FAE5' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#10B981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#003A6C' }}>Project & Product Teams</h3>
              <p className="text-sm text-gray-500 mb-4">Program Managers, Product Owners</p>
              <p className="text-sm text-gray-600 mb-4">
                Deliver measurable assets and capabilities into DBP.
              </p>
              
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">KEY CONTRIBUTIONS</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Project Execution</li>
                  <li>• Asset Delivery</li>
                  <li>• Milestone Tracking</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">PLATFORM CAPABILITIES</h4>
                <p className="text-sm text-gray-600">Portfolio Management | Lifecycle Management | Document Studio</p>
              </div>

              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline inline-flex items-center gap-1">
                Manage My Projects →
              </a>
            </div>

            {/* Contributor 5 - Lifecycle Operations Teams */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="mb-4">
                <div style={{ backgroundColor: '#FCE7F3' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#EC4899' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#003A6C' }}>Lifecycle Operations Teams</h3>
              <p className="text-sm text-gray-500 mb-4">Operations, Insights, ADM</p>
              <p className="text-sm text-gray-600 mb-4">
                Introduce continuous improvements and operational feedback.
              </p>
              
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">KEY CONTRIBUTIONS</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Operational Feedback</li>
                  <li>• Continuous Improvement</li>
                  <li>• Performance Insights</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">PLATFORM CAPABILITIES</h4>
                <p className="text-sm text-gray-600">Lifecycle Tracking | Operational Analytics | Compliance Checks</p>
              </div>

              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline inline-flex items-center gap-1">
                Open Lifecycle Workspace →
              </a>
            </div>

            {/* Contributor 6 - Security DevOps Enablement */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="mb-4">
                <div style={{ backgroundColor: '#EDE9FE' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#8B5CF6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#003A6C' }}>Security DevOps Enablement</h3>
              <p className="text-sm text-gray-500 mb-4">SecDevOps, Support Teams</p>
              <p className="text-sm text-gray-600 mb-4">
                Ensure security, delivery automation, and user enablement.
              </p>
              
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">KEY CONTRIBUTIONS</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Security Policies</li>
                  <li>• Delivery Automation</li>
                  <li>• User Enablement</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">PLATFORM CAPABILITIES</h4>
                <p className="text-sm text-gray-600">Support Services | Secure Delivery | Operational Guardrails</p>
              </div>

              <a href="#" style={{ color: '#5F2D91' }} className="text-sm font-medium hover:underline inline-flex items-center gap-1">
                Access Secure Operations →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 leading-tight" style={{ color: '#000000' }}>
            Ready to Govern STC Bank's Digital Transformation Enterprise-Wide?
          </h2>
          <p className="text-base mb-10 leading-relaxed text-gray-600">
            One Architecture. One STC Bank. Begin the enterprise transformation governance journey from Core Banking to Innovation, from Customer Services to Digital Excellence.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <button 
              style={{ backgroundColor: '#5F2D91' }} 
              className="px-8 py-3 rounded text-white font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Enter the Platform
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              style={{ color: '#5F2D91', borderColor: '#5F2D91' }} 
              className="px-8 py-3 rounded font-medium border-2 hover:bg-purple-50 transition-colors"
            >
              Find Your Division
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#5F2D91' }} className="text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">STC Bank DTMP</h3>
              <p className="text-sm text-purple-200">
                Digital Transformation Management Platform for enterprise-wide initiatives
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-400 pt-8 text-center text-sm text-purple-200">
            <p>© 2024 STC Bank. All rights reserved. Digital Transformation Management Platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
