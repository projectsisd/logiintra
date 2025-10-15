// assets/search_index.js
var searchIndex = [
  {
    "id": "electrical_work",
    "title": "Electrical Work",
    "technical_name": "electrical_work",
    "description": "-",
    "dependency": "base, mail, hr, fiscal_erp_invoice, web, portal, logiintra_base",
    "url": "docs/electrical_work.html"
  },
  {
    "id": "fiscal_erp_invoice",
    "title": "Fiscal ERP Invoice",
    "technical_name": "fiscal_erp_invoice",
    "description": "Application which have layout of invoice.",
    "dependency": "base, account, l10n_in, l10n_in_upi, account, sale_management, purchase",
    "url": "docs/fiscal_erp_invoice.html"
  },
  {
    "id": "fiscal_mfg_base",
    "title": "Fiscal MFG Base",
    "technical_name": "fiscal_mfg_base",
    "description": "Fiscal MFG Base",
    "dependency": "base, sale_management, mrp, fiscal_erp_invoice",
    "url": "docs/fiscal_mfg_base.html"
  },
  {
    "id": "fiscal_mfg_sludge",
    "title": "Fiscal MFG Sludge",
    "technical_name": "fiscal_mfg_sludge",
    "description": "-",
    "dependency": "base, stock, l10n_in, account, sale_management, purchase, fiscal_erp_invoice",
    "url": "docs/fiscal_mfg_sludge.html"
  },
  {
    "id": "fleet_vehicle_log_fuel",
    "title": "Fleet Vehicle Log Fuel",
    "technical_name": "fleet_vehicle_log_fuel",
    "description": "-",
    "dependency": "fleet, logiintra_fleet_enhancement, logiintra_base, account, sale_management, purchase",
    "url": "docs/fleet_vehicle_log_fuel.html"
  },
  {
    "id": "logiintra_base",
    "title": "Logiintra Base",
    "technical_name": "logiintra_base",
    "description": "Base application with masters for logiintra suit of logistics applications.",
    "dependency": "base, mail, product, sale_management, hr, l10n_in, contacts, fleet, hr_contract, partner_manual_rank, partner_stage, spreadsheet_dashboard_oca, purchase, stock, account, l10n_in_edi, crm, fiscal_erp_invoice, l10n_in_tcs_tds",
    "url": "docs/logiintra_base.html"
  },
  {
    "id": "logiintra_bill_of_lading",
    "title": "Logiintra Bill Of Lading",
    "technical_name": "logiintra_bill_of_lading",
    "description": "Bill of Lading module for Forwarders/NVOCC in India customs.",
    "dependency": "base, logiintra_base, logiintra_cost_items, logiintra_export_job, logiintra_import_nvocc, logiintra_import_job, logiintra_export_nvocc",
    "url": "docs/logiintra_bill_of_lading.html"
  },
  {
    "id": "logiintra_booking_do",
    "title": "Logiintra Booking DO",
    "technical_name": "logiintra_booking_do",
    "description": "Export or Import booking or DO of shipping line, entry or generation.",
    "dependency": "base, logiintra_base",
    "url": "docs/logiintra_booking_do.html"
  },
  {
    "id": "logiintra_coastal_road",
    "title": "Logiintra Coastal Road",
    "technical_name": "logiintra_coastal_road",
    "description": "Coastal.",
    "dependency": "mail, base, logiintra_base, logiintra_loading_reg",
    "url": "docs/logiintra_coastal_road.html"
  },
  {
    "id": "logiintra_cost_items",
    "title": "Logiintra Cost Items",
    "technical_name": "logiintra_cost_items",
    "description": "Manage cost items for logistics operations.",
    "dependency": "base, l10n_in_edi, l10n_in, logiintra_base, logiintra_export_job, sale_management, purchase, logiintra_export_nvocc, logiintra_import_job, logiintra_supplementary_job, logiintra_nvocc_survey_reports, logiintra_loading_reg, logiintra_ship_chandling_job, fiscal_erp_invoice, electrical_work",
    "url": "docs/logiintra_cost_items.html"
  },
  {
    "id": "logiintra_export_bulk",
    "title": "Logiintra Export Bulk",
    "technical_name": "logiintra_export_bulk",
    "description": "Export bulk job.",
    "dependency": "mail, base, logiintra_base, logiintra_import_bulk",
    "url": "docs/logiintra_export_bulk.html"
  },
  {
    "id": "logiintra_export_filing",
    "title": "Logiintra Export Filing",
    "technical_name": "logiintra_export_filing",
    "description": "Export shipping bill filing application for CHA in India customs.",
    "dependency": "base, logiintra_base, web",
    "url": "docs/logiintra_export_filing.html"
  },
  {
    "id": "logiintra_export_job",
    "title": "Logiintra Export Job",
    "technical_name": "logiintra_export_job",
    "description": "Export shipping job and billing management for CHA in India customs.",
    "dependency": "mail, logiintra_base, logiintra_booking_do, logiintra_export_filing, stock, hr",
    "url": "docs/logiintra_export_job.html"
  },
  {
    "id": "logiintra_export_nvocc",
    "title": "Logiintra Export NVOCC",
    "technical_name": "logiintra_export_nvocc",
    "description": "-",
    "dependency": "base, logiintra_base, logiintra_generate_booking_do, logiintra_import_nvocc, logiintra_export_filing",
    "url": "docs/logiintra_export_nvocc.html"
  },
  {
    "id": "logiintra_fleet_enhancement",
    "title": "Logiintra Fleet Enhancement",
    "technical_name": "logiintra_fleet_enhancement",
    "description": "This app will add features in the existing fleet module.",
    "dependency": "web, base, fleet, logiintra_base, hr, account, hr_skills",
    "url": "docs/logiintra_fleet_enhancement.html"
  },
  {
    "id": "logiintra_generate_booking_do",
    "title": "Logiintra Generate Booking DO",
    "technical_name": "logiintra_generate_booking_do",
    "description": "-",
    "dependency": "base, logiintra_base",
    "url": "docs/logiintra_generate_booking_do.html"
  },
  {
    "id": "logiintra_import_bulk",
    "title": "Logiintra Import Bulk",
    "technical_name": "logiintra_import_bulk",
    "description": "-",
    "dependency": "mail, base, logiintra_base, logiintra_import_filing",
    "url": "docs/logiintra_import_bulk.html"
  },
  {
    "id": "logiintra_import_filing",
    "title": "Logiintra Import Filing",
    "technical_name": "logiintra_import_filing",
    "description": "Import bill of entry filing application for CHA in India customs.",
    "dependency": "base, logiintra_base, product",
    "url": "docs/logiintra_import_filing.html"
  },
  {
    "id": "logiintra_import_job",
    "title": "Logiintra Import Job",
    "technical_name": "logiintra_import_job",
    "description": "Import shipping job and billing management for CHA in India customs.",
    "dependency": "mail, base, logiintra_base, hr, stock, logiintra_booking_do, logiintra_import_filing",
    "url": "docs/logiintra_import_job.html"
  },
  {
    "id": "logiintra_import_nvocc",
    "title": "Logiintra Import NVOCC",
    "technical_name": "logiintra_import_nvocc",
    "description": "-",
    "dependency": "base, web, logiintra_base, logiintra_generate_booking_do, logiintra_export_filing, spreadsheet_dashboard, im_livechat, website_livechat",
    "url": "docs/logiintra_import_nvocc.html"
  },
  {
    "id": "logiintra_loading_reg",
    "title": "Logiintra Loading Reg",
    "technical_name": "logiintra_loading_reg",
    "description": "Consignment Note or Bilty module for transporters of India.",
    "dependency": "base, sale, hr, stock, logiintra_base, fleet, logiintra_fleet_enhancement, logiintra_tpt_plan, fleet_vehicle_log_fuel, logiintra_import_job",
    "url": "docs/logiintra_loading_reg.html"
  },
  {
    "id": "logiintra_nvocc_survey_reports",
    "title": "Logiintra NVOCC Survey Reports",
    "technical_name": "logiintra_nvocc_survey_reports",
    "description": "Base application with masters for Logiintra NVOCC/Survey Reports &amp; logistics applications.",
    "dependency": "base, base_setup, mail, logiintra_base, logiintra_import_job, logiintra_export_nvocc",
    "url": "docs/logiintra_nvocc_survey_reports.html"
  },
  {
    "id": "logiintra_ship_chandling_job",
    "title": "Logiintra Ship Chandling Job",
    "technical_name": "logiintra_ship_chandling_job",
    "description": "-",
    "dependency": "base, logiintra_base, fiscal_erp_invoice",
    "url": "docs/logiintra_ship_chandling_job.html"
  },
  {
    "id": "logiintra_supplementary_job",
    "title": "Logiintra Supplementary Job",
    "technical_name": "logiintra_supplementary_job",
    "description": "-",
    "dependency": "base, logiintra_base, project",
    "url": "docs/logiintra_supplementary_job.html"
  },
  {
    "id": "logiintra_tpt_plan",
    "title": "Logiintra TPT Plan",
    "technical_name": "logiintra_tpt_plan",
    "description": "Transportation planning process before LR for transporters of India.",
    "dependency": "base, logiintra_base, logiintra_export_job",
    "url": "docs/logiintra_tpt_plan.html"
  }
];

// Initialize Lunr.js index
var idx = lunr(function () {
  this.ref('id');
  this.field('title', { boost: 10 });
  this.field('technical_name', { boost: 8 });
  this.field('description', { boost: 5 });
  this.field('dependency', { boost: 3 });

  searchIndex.forEach(function (doc) {
    this.add(doc);
  }, this);
});
