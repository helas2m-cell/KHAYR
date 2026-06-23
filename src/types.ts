/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'id' | 'en';

export interface TranslationSet {
  logo_tag: string;
  logo_tag_f: string;
  nav_platform: string;
  nav_modules: string;
  nav_howitworks: string;
  nav_pricing: string;
  nav_contact: string;
  nav_watchdemo: string;
  nav_requestdemo: string;
  nav_login: string;

  // Hero section
  hero_badge: string;
  hero_h1a: string;
  hero_h1b: string;
  hero_sub: string;
  hero_btn1: string;
  hero_btn2: string;
  hero_note: string;
  hero_stat1: string;
  hero_stat2: string;
  hero_stat3: string;

  // Live card
  db_title: string;
  db_live: string;
  db_m1: string;
  db_m2: string;
  db_m3: string;
  db_d1: string;
  db_d2: string;
  db_d3: string;
  db_upcoming: string;
  db_treat1: string;
  db_treat2: string;
  db_treat3: string;
  db_confirmed: string;
  db_pending: string;
  db_done: string;

  // Trust bar
  trust1: string;
  trust2: string;
  trust4: string;
  trust5: string;
  trust6: string;

  // Platform
  plat_label: string;
  plat_title: string;
  plat_sub: string;
  role1_title: string;
  role1_badge: string;
  role1_text: string;
  role2_title: string;
  role2_badge: string;
  role2_text: string;
  role3_title: string;
  role3_badge: string;
  role3_text: string;
  role4_title: string;
  role4_badge: string;
  role4_text: string;

  // Pillars
  pillars_label: string;
  pillars_title: string;
  pillars_sub: string;
  p1_head: string;
  p1_sub: string;
  p1_i1: string;
  p1_i2: string;
  p1_i3: string;
  p1_i4: string;
  p1_i5: string;
  p1_i6: string;
  p2_head: string;
  p2_sub: string;
  p2_i1: string;
  p2_i2: string;
  p2_i3: string;
  p2_i4: string;
  p2_i5: string;
  p3_head: string;
  p3_sub: string;
  p3_i1: string;
  p3_i2: string;
  p3_i3: string;
  p3_i4: string;

  // Inside parts
  mod_label: string;
  mod_title: string;
  mod_sub: string;
  tab1: string;
  tab2: string;
  tab3: string;
  tab4: string;
  tab5: string;
  tab6: string;

  // Reservations Panel
  s1_title: string;
  s1_desc: string;
  s1_f1t: string;
  s1_f1d: string;
  s1_f2t: string;
  s1_f2d: string;
  s1_f3t: string;
  s1_f3d: string;
  res_highlight: string;

  // Appointments List Panel
  s2_title: string;
  s2_desc: string;
  s2_f1t: string;
  s2_f1d: string;
  s2_f2t: string;
  s2_f2d: string;
  s2_f3t: string;
  s2_f3d: string;

  // Clinical Panel
  s3_title: string;
  s3_desc: string;
  s3_f1t: string;
  s3_f1d: string;
  s3_f2t: string;
  s3_f2d: string;
  s3_f3t: string;
  s3_f3d: string;

  // Medical History Panel
  s4_title: string;
  s4_desc: string;
  s4_f1t: string;
  s4_f1d: string;
  s4_f2t: string;
  s4_f2d: string;
  s4_f3t: string;
  s4_f3d: string;

  // Inventory Panel
  s5_title: string;
  s5_desc: string;
  s5_f1t: string;
  s5_f1d: string;
  s5_f2t: string;
  s5_f2d: string;
  s5_f3t: string;
  s5_f3d: string;
  inv_footer: string;

  // Analytics Panel
  s6_title: string;
  s6_desc: string;
  s6_f1t: string;
  s6_f1d: string;
  s6_f2t: string;
  s6_f2d: string;
  s6_f3t: string;
  s6_f3d: string;
  an_rev: string;
  an_rev_sub: string;
  an_pat: string;
  an_pat_sub: string;
  leg_treat: string;
  leg_med: string;
  an_monthly: string;
  an_new: string;
  an_ret: string;
  an_new_mo: string;

  // Flywheel
  fly_label: string;
  fly_title: string;
  fly_sub: string;
  fly_p1_title: string;
  fly_p1_sub: string;
  fly_p1_desc: string;
  fly_p2_title: string;
  fly_p2_sub: string;
  fly_p2_desc: string;
  fly_p3_title: string;
  fly_p3_sub: string;
  fly_p3_desc: string;
  fly_quote: string;

  // Testimonials
  testi_label: string;
  testi_title: string;
  testi_sub: string;
  t1_role: string;
  t2_role: string;
  t3_role: string;
  t1_text: string;
  t2_text: string;
  t3_text: string;

  // Pricing
  price_label: string;
  price_title: string;
  price_sub: string;
  plan1_name: string;
  p1_currency: string;
  p1_num: string;
  plan1_period: string;
  plan1_desc: string;
  plan1_f1: string;
  plan1_f2: string;
  plan1_f3: string;
  plan1_f4: string;
  plan1_f5: string;
  plan1_btn: string;

  plan2_badge: string;
  plan2_name: string;
  p2_currency: string;
  p2_num: string;
  plan2_period: string;
  plan2_desc: string;
  plan2_f1: string;
  plan2_f2: string;
  plan2_f3: string;
  plan2_f4: string;
  plan2_f5: string;
  plan2_f6: string;
  plan2_btn: string;

  plan3_name: string;
  plan3_price: string;
  plan3_desc: string;
  plan3_f1: string;
  plan3_f2: string;
  plan3_f3: string;
  plan3_f4: string;
  plan3_f5: string;
  plan3_btn: string;

  // Security band
  sec1: string;
  sec2: string;
  sec4: string;
  sec5: string;
  sec6: string;

  // Call To Action / Lead Form
  cta_title: string;
  cta_sub: string;
  form_title: string;
  form_sub: string;
  form_fn: string;
  form_ln: string;
  form_email: string;
  form_phone: string;
  form_size: string;
  form_country: string;
  form_btn: string;
  form_note: string;
  opt_s1: string;
  opt_s2: string;
  opt_s3: string;
  opt_s4: string;

  // Footer & more
  footer_desc: string;
  footer_col1: string;
  footer_f1_1: string;
  footer_f1_2: string;
  footer_f1_3: string;
  footer_f1_4: string;
  footer_f1_5: string;
  footer_col2: string;
  footer_f2_1: string;
  footer_f2_2: string;
  footer_f2_3: string;
  footer_f2_4: string;
  footer_f2_5: string;
  footer_col3: string;
  footer_f3_1: string;
  footer_f3_2: string;
  footer_f3_3: string;
  footer_f3_4: string;
  footer_f3_0: string; // added to match standard items fully if needed, we'll keep list clean
  footer_f3_5: string;
  footer_copy: string;
  ss_sub: string;
}
