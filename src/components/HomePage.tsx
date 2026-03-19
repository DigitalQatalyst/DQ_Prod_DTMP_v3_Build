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
      <div className="fixed inset-0 flex items-center justify-center z-50" 
           style={{ background: 'linear-gradient(110deg, #FF6B4A 0%, #5F2D91 45%, #2D1052 100%)' }}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-white text-xl font-bold">Loading Digital Transformation Platform</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-['Manrope']">
      {/* Header */}
      <header className="sticky top-0 z-50 h-12" style={{ backgroundColor: '#0A0A1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left Side - Logo and Explore */}
            <div className="flex items-center space-x-6">
              <div className="text-white text-sm font-bold">STC Bank</div>
              <div className="relative group">
                <button className="text-white/85 hover:text-white text-sm font-medium transition-colors flex items-center">
                  Explore
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Learning Centre</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Knowledge Centre</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Document Studio</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Solution Specs</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Solution Build</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lifecycle Management</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-3">
              <button className="px-4 py-1.5 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
                Request Support
              </button>
              <button className="px-4 py-1.5 text-white text-sm font-medium rounded-md hover:opacity-90 transition-colors"
                      style={{ backgroundColor: '#5F2D91' }}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="min-h-[88vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8" 
               style={{ background: 'linear-gradient(110deg, #FF6B4A 0%, #5F2D91 45%, #2D1052 100%)' }}>
        <div className="max-w-4xl mx-auto py-20">
          {/* Main Headline */}
          <h1 className="text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
            One Platform. One Direction. Governing STC Bank's Digital Transformation.
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/75 mb-12 max-w-2xl mx-auto leading-relaxed">
            Empowering STC Bank's teams with a structured four-phase approach to enterprise transformation.
          </p>

          {/* AI Explore Bar */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="What transformation challenge can we help with?"
                className="w-full px-6 py-4 rounded-full text-white placeholder-white/60 text-sm"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.12)', 
                  border: '1px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(8px)'
                }}
              />
              <button className="absolute right-2 top-2 px-6 py-2 rounded-full text-white text-sm font-semibold"
                      style={{ backgroundColor: '#FF6B4A' }}>
                Explore →
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full text-white font-semibold text-base"
                    style={{ backgroundColor: '#FF6B4A' }}>
              Explore Marketplaces
            </button>
            <button className="px-8 py-4 rounded-full text-white font-semibold text-base border border-white hover:bg-white/10 transition-colors">
              Watch Overview →
            </button>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-extrabold mb-2"
                   style={{ 
                     background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)',
                     WebkitBackgroundClip: 'text',
                     backgroundClip: 'text',
                     color: 'transparent'
                   }}>
                4
              </div>
              <div className="text-sm font-medium text-gray-600">Transformation Phases</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2"
                   style={{ 
                     background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)',
                     WebkitBackgroundClip: 'text',
                     backgroundClip: 'text',
                     color: 'transparent'
                   }}>
                6
              </div>
              <div className="text-sm font-medium text-gray-600">Integrated Marketplaces</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2"
                   style={{ 
                     background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)',
                     WebkitBackgroundClip: 'text',
                     backgroundClip: 'text',
                     color: 'transparent'
                   }}>
                3
              </div>
              <div className="text-sm font-medium text-gray-600">Workflow Stages</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2"
                   style={{ 
                     background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)',
                     WebkitBackgroundClip: 'text',
                     backgroundClip: 'text',
                     color: 'transparent'
                   }}>
                1
              </div>
              <div className="text-sm font-medium text-gray-600">Unified Platform</div>
            </div>
          </div>
        </div>
      </section>
      {/* 4D Framework Section */}
      <section className="py-24" style={{ backgroundColor: '#F0F1F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0D0F1A' }}>
              The 4D Transformation Model
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Every service on DTMP maps to one of four structured phases.
            </p>
          </div>

          {/* 4D Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Discern */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative"
                 style={{ borderBottom: '3px solid #2563EB' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-3" style={{ color: '#2563EB' }}>DISCERN</h3>
              <p className="text-sm text-gray-600 mb-4">
                Understand current state and identify transformation opportunities.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Assessment & Analysis</li>
                <li>• Gap Identification</li>
                <li>• Strategic Planning</li>
              </ul>
            </div>

            {/* Design */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative"
                 style={{ borderBottom: '3px solid #0D9488' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-3" style={{ color: '#0D9488' }}>DESIGN</h3>
              <p className="text-sm text-gray-600 mb-4">
                Create blueprints and architecture for transformation initiatives.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Solution Architecture</li>
                <li>• Process Design</li>
                <li>• Technical Specifications</li>
              </ul>
            </div>

            {/* Deploy */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative"
                 style={{ borderBottom: '3px solid #7C3AED' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-3" style={{ color: '#7C3AED' }}>DEPLOY</h3>
              <p className="text-sm text-gray-600 mb-4">
                Execute and implement transformation solutions across the enterprise.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Implementation</li>
                <li>• Change Management</li>
                <li>• User Training</li>
              </ul>
            </div>

            {/* Drive */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative"
                 style={{ borderBottom: '3px solid #EA580C' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-3" style={{ color: '#EA580C' }}>DRIVE</h3>
              <p className="text-sm text-gray-600 mb-4">
                Monitor, optimize, and sustain transformation outcomes.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Performance Monitoring</li>
                <li>• Continuous Improvement</li>
                <li>• Value Realization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Six Marketplaces Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0D0F1A' }}>
              Six Integrated EA Marketplaces
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Structured services across every phase of your transformation journey.
            </p>
          </div>

          {/* Marketplaces Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Learning Centre */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>DTMP Learning Centre</h3>
              <p className="text-sm text-gray-600">
                Structured pathways for EA literacy and transformation fundamentals.
              </p>
            </div>

            {/* Knowledge Centre */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>DTMP Knowledge Centre</h3>
              <p className="text-sm text-gray-600">
                Architecture knowledge, governance references, and strategy documents.
              </p>
            </div>

            {/* Document Studio */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>DTMP Document Studio</h3>
              <p className="text-sm text-gray-600">
                AI-powered document generation with defined SLAs for all divisions.
              </p>
            </div>

            {/* Solution Specs */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>DTMP Solution Specs</h3>
              <p className="text-sm text-gray-600">
                Standardized architecture blueprints for transformation patterns.
              </p>
            </div>

            {/* Solution Build */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>DTMP Solution Build</h3>
              <p className="text-sm text-gray-600">
                Build resources and delivery capacity for transformation initiatives.
              </p>
            </div>

            {/* Lifecycle Management */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>DTMP Lifecycle Management</h3>
              <p className="text-sm text-gray-600">
                Govern initiatives through stage gates and compliance tracking.
              </p>
            </div>
          </div>

          {/* Section CTA */}
          <div className="text-center">
            <button className="px-8 py-4 rounded-lg text-white font-bold"
                    style={{ backgroundColor: '#2D1052' }}>
              Explore All Marketplaces — Full Access
            </button>
          </div>
        </div>
      </section>

      {/* Built to Integrate Service Domains Section */}
      <section className="py-24" style={{ backgroundColor: '#F0F1F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0D0F1A' }}>
              Built to Integrate Service Domains
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Seamlessly connect and orchestrate transformation services across your enterprise ecosystem.
            </p>
          </div>

          {/* Integration Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Strategic Planning */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 012-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Strategic Planning</h3>
              <p className="text-sm text-gray-600">
                Enterprise strategy alignment and portfolio planning integration.
              </p>
            </div>

            {/* Architecture Design */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Architecture Design</h3>
              <p className="text-sm text-gray-600">
                Solution architecture and technical design pattern integration.
              </p>
            </div>

            {/* Project Delivery */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Project Delivery</h3>
              <p className="text-sm text-gray-600">
                Agile delivery frameworks and project management integration.
              </p>
            </div>

            {/* Operations Management */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Operations Management</h3>
              <p className="text-sm text-gray-600">
                Operational excellence and continuous improvement integration.
              </p>
            </div>

            {/* Risk & Compliance */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Risk & Compliance</h3>
              <p className="text-sm text-gray-600">
                Governance frameworks and regulatory compliance integration.
              </p>
            </div>

            {/* Technology Platforms */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Technology Platforms</h3>
              <p className="text-sm text-gray-600">
                Infrastructure and platform services integration across the stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise EA Value Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0D0F1A' }}>
              Enterprise EA Value
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Measurable outcomes and strategic value delivered through structured transformation.
            </p>
          </div>

          {/* Value Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <div className="text-4xl font-extrabold mb-2"
                   style={{ 
                     background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)',
                     WebkitBackgroundClip: 'text',
                     backgroundClip: 'text',
                     color: 'transparent'
                   }}>
                40%
              </div>
              <div className="text-sm font-medium text-gray-600">Faster Time to Market</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2"
                   style={{ 
                     background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)',
                     WebkitBackgroundClip: 'text',
                     backgroundClip: 'text',
                     color: 'transparent'
                   }}>
                60%
              </div>
              <div className="text-sm font-medium text-gray-600">Reduced Architecture Debt</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2"
                   style={{ 
                     background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)',
                     WebkitBackgroundClip: 'text',
                     backgroundClip: 'text',
                     color: 'transparent'
                   }}>
                85%
              </div>
              <div className="text-sm font-medium text-gray-600">Governance Compliance</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2"
                   style={{ 
                     background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)',
                     WebkitBackgroundClip: 'text',
                     backgroundClip: 'text',
                     color: 'transparent'
                   }}>
                30%
              </div>
              <div className="text-sm font-medium text-gray-600">Cost Optimization</div>
            </div>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Strategic Alignment */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Strategic Alignment</h3>
              <p className="text-sm text-gray-600">
                Ensure all transformation initiatives align with business strategy and deliver measurable value.
              </p>
            </div>

            {/* Risk Mitigation */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Risk Mitigation</h3>
              <p className="text-sm text-gray-600">
                Proactive identification and management of transformation risks across all domains.
              </p>
            </div>

            {/* Operational Excellence */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Operational Excellence</h3>
              <p className="text-sm text-gray-600">
                Continuous improvement and optimization of transformation processes and outcomes.
              </p>
            </div>

            {/* Innovation Acceleration */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Innovation Acceleration</h3>
              <p className="text-sm text-gray-600">
                Enable rapid experimentation and deployment of innovative solutions across the enterprise.
              </p>
            </div>

            {/* Cost Optimization */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Cost Optimization</h3>
              <p className="text-sm text-gray-600">
                Systematic reduction of transformation costs through standardization and automation.
              </p>
            </div>

            {/* Scalable Growth */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Scalable Growth</h3>
              <p className="text-sm text-gray-600">
                Build transformation capabilities that scale with business growth and market demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-24" style={{ backgroundColor: '#F0F1F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0D0F1A' }}>
              Who Uses the STC Bank Transformation Platform
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Empowering every role in the transformation journey with specialized tools and insights.
            </p>
          </div>

          {/* Contributors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Transformation Office */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 012-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Transformation Office</h3>
              <p className="text-sm text-gray-600">
                Portfolio oversight, governance frameworks, and strategic alignment across all initiatives.
              </p>
            </div>

            {/* Strategy & Leadership */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Strategy & Leadership</h3>
              <p className="text-sm text-gray-600">
                Executive dashboards, strategic planning tools, and transformation impact measurement.
              </p>
            </div>

            {/* Business Architects */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Business Architects</h3>
              <p className="text-sm text-gray-600">
                Process modeling, capability mapping, and solution architecture design patterns.
              </p>
            </div>

            {/* Project & Product Teams */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Project & Product Teams</h3>
              <p className="text-sm text-gray-600">
                Delivery frameworks, resource planning, and cross-functional collaboration tools.
              </p>
            </div>

            {/* Lifecycle Operations */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Lifecycle Operations</h3>
              <p className="text-sm text-gray-600">
                Stage gate management, compliance tracking, and operational excellence monitoring.
              </p>
            </div>

            {/* Security & DevOps */}
            <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: '#E8EAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%)' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#0D0F1A' }}>Security & DevOps</h3>
              <p className="text-sm text-gray-600">
                Security frameworks, deployment pipelines, and infrastructure automation standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-24" style={{ backgroundColor: '#2D1052' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Govern STC Bank's Digital Transformation?
          </h2>
          <p className="text-lg mb-12" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Connect your teams, manage your portfolio, and drive outcomes — all in one platform.
          </p>
          <button className="px-9 py-4 rounded-full text-white font-bold text-base"
                  style={{ backgroundColor: '#FF6B4A' }}>
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-1">
              <div className="text-xl font-bold mb-4" style={{ color: '#2D1052' }}>
                STC Bank
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Digital Transformation Management Platform - Empowering enterprise transformation through structured governance and integrated marketplaces.
              </p>
              <div className="text-xs text-gray-500">
                © 2026 STC Bank. All rights reserved.
              </div>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Learning Centre</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Knowledge Centre</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Document Studio</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Solution Specs</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Solution Build</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Lifecycle Management</a></li>
              </ul>
            </div>

            {/* Framework */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Framework</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Discern Phase</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Design Phase</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Deploy Phase</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Drive Phase</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Governance</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Best Practices</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Training Resources</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Status Page</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-xs text-gray-500 mb-4 md:mb-0">
                Part of STC Group - Saudi Arabia's Digital Transformation Leader
              </div>
              <div className="flex space-x-6 text-xs text-gray-500">
                <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Security</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;