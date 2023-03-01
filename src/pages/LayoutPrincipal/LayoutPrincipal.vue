<template>
      <!-- Begin page -->
      <div id="wrapper">
  
        <!-- Top Bar Inicio -->
        <div class="topbar">
  
          <!-- LOGO -->
          <div class="topbar-left">
            <a href="#" class="logo">
              <span class="logo-light">
                <i class="mdi mdi-camera-control"></i> Alvisa
              </span>
              <span class="logo-sm">
                <i class="mdi mdi-camera-control"></i>
              </span>
            </a>
          </div>
  
          <nav class="navbar-custom">
            <ul class="navbar-right list-inline float-right mb-0">
  
              <!-- full screen -->
              <li class="dropdown notification-list list-inline-item d-none d-md-inline-block">
                <a class="nav-link waves-effect" href="#" id="btn-fullscreen">
                  <i class="mdi mdi-arrow-expand-all noti-icon"></i>
                </a>
              </li>
  
              <!-- notification -->
              <li class="dropdown notification-list list-inline-item">
                <a class="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button"
                  aria-haspopup="false" aria-expanded="false">
                  <i class="mdi mdi-bell-outline noti-icon"></i>
                  <span class="badge badge-pill badge-danger noti-icon-badge">3</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg px-1">
                  <!-- item-->
                  <h6 class="dropdown-item-text">
                    Notifications
                  </h6>
                  <div class="slimscroll notification-item-list">
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon bg-success"><i class="mdi mdi-cart-outline"></i></div>
                      <p class="notify-details"><b>Hay un pedido pendiente</b>
                        <span class="text-muted">
                          Click para ver detalle
                        </span>
                      </p>
                    </a>
  
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon bg-danger"><i class="mdi mdi-message-text-outline"></i></div>
                      <p class="notify-details"><b>Tiene un nuevo mensaje</b><span class="text-muted">Tiene 13 mensajes sin
                          leer</span></p>
                    </a>
  
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon bg-info"><i class="mdi mdi-filter-outline"></i></div>
                      <p class="notify-details"><b>Tu pedido está viajando</b><span class="text-muted">Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit.</span></p>
                    </a>
  
                  </div>
                  <!-- All-->
                  <a href="javascript:void(0);" class="dropdown-item text-center notify-all text-primary">
                    Ver todo <i class="fi-arrow-right"></i>
                  </a>
                </div>
              </li>
  
              <li class="dropdown notification-list list-inline-item">
                <div class="dropdown notification-list nav-pro-img">
                  <a class="dropdown-toggle nav-link arrow-none nav-user" data-toggle="dropdown" href="#" role="button"
                    aria-haspopup="false" aria-expanded="false">
                    <img src="assets/images/user-2.png" alt="user" class="rounded-circle">
                  </a>
                  <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                    <!-- item-->
                    <a class="dropdown-item" href="#"><i class="mdi mdi-account-circle"></i>Perfil</a>
                    <a class="dropdown-item d-block" href="#"><i class="mdi mdi-settings"></i>Ajustes</a>
                    <div class="dropdown-divider"></div>
                    
                  </div>
                </div>
              </li>
  
            </ul>
  
            <ul class="list-inline menu-left mb-0">
              <li class="float-left">
                <button class="button-menu-mobile open-left waves-effect">
                  <i class="mdi mdi-menu"></i>
                </button>
              </li>
            </ul>
  
          </nav>
  
        </div>
        <!-- Top Bar Final -->
  
        <!-- ========== Left Sidebar Inicio ========== -->
        <div class="left side-menu">
          <div class="slimscroll-menu" id="remove-scroll">
  
            <!--- Sidemenu -->
            <div id="sidebar-menu">
              <!-- Left Menu Start -->
              <ul class="metismenu" id="side-menu">
                <li class="menu-title">Menu</li>
                <li>
                  <a href="#" class="waves-effect">
                    <i class='bx bxs-dashboard'></i>
                    <span>
                      Panel Principal </span>
                  </a>
                </li>
  
                <li>
                  <a href="javascript:void(0);" class="waves-effect"><i class='bx bxs-cog'></i>
                    <span> Configuración <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
                    </span></a>
                  <ul class="submenu">
                    <li><router-link :to="{ name: 'list-type' }">Empresa</router-link></li>
                    <li><a href="#">Cuentas Bancarias</a></li>
                    <li><a href="#">Locales</a></li>
                    <li><a href="#">Usuarios</a></li>
                  </ul>
                </li>
  
                <li>
                  <a href="javascript:void(0);" class="waves-effect"><i class='bx bxs-wrench'></i><span> Mantenimiento <span
                        class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                  <ul class="submenu">
                    <li><a href="#">Usuarios</a></li>
                    <li><a href="#">Proveedores</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Bancos</a></li>
                    <li><a href="#">Unidades</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Líneas y Sublíneas</a></li>
                  </ul>
                </li>
  
                <li>
                  <a href="javascript:void(0);" class="waves-effect"><i class='bx bx-exclude'></i><span> Productos <span
                        class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                  <ul class="submenu">
                    <li><a href="#">Lista Productos</a></li>
                    <li><a href="#">Update Dólar</a></li>
                  </ul>
                </li>
  
                <li class="menu-title">VENTAS</li>
  
                <li>
                  <a href="javascript:void(0);" class="waves-effect"><i class='bx bxs-store-alt'></i> <span> Almacén
                      <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span> </a>
                  <ul class="submenu">
                    <li><a href="#">Kárdex</a></li>
                    <li><a href="#">Productos a Comprar</a></li>
                    <li><a href="#">Pedidos</a></li>
                    <li><a href="#">Registrar Ubicaciones</a></li>
                    <li><a href="#">Consultar Ubicación</a></li>
                  </ul>
                </li>
  
                <li>
                  <a href="javascript:void(0);" class="waves-effect"><i class='bx bxs-cart-add'></i><span> Realizar Venta
                      <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                  <ul class="submenu">
                    <li><a href="#">Fijar Precio Venta</a></li>
                    <li><a href="#">Crear Venta</a></li>
                    <li><a href="#">Ventas del Día</a></li>
                    <li><a href="#">Consultar Pedido</a></li>
                  </ul>
                </li>
  
                <li>
                  <a href="javascript:void(0);" class="waves-effect"><i class='bx bxs-bar-chart-alt-2'></i> <span> Finanzas
                      <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span> </a>
                  <ul class="submenu">
                    <li><a href="#">Cobros</a></li>
                    <li><a href="#">Créditos</a></li>
                    <li><a href="#">Consolidado</a></li>
                    <li><a href="#">Listar Ventas</a></li>
                  </ul>
                </li>
  
                <li>
                  <a href="javascript:void(0);" class="waves-effect"><i class='bx bx-line-chart'></i><span> Estadísticas
                      <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                  <ul class="submenu">
                    <li><a href="#">Ranking Vendedores</a></li>
                    <li><a href="#">Ranking Clientes</a></li>
                    <li><a href="#">Ranking Productos</a></li>
                    <li><a href="#">Utilidad por Venta</a></li>
                    <li><a href="#">Utilidad por Producto</a></li>
                  </ul>
                </li>
              </ul>
  
            </div>
            <!-- Sidebar -->
            <div class="clearfix"></div>
  
          </div>
          <!-- Sidebar -left -->
  
        </div>
        <!-- Left Sidebar Final -->
  
        <!-- ============================================================== -->
        <!-- Contenido de la página -->
        <!-- ============================================================== -->
        <div class="content-page">
          <!-- Start content -->
          <div class="content">
            <div class="container-fluid">
  
              <router-view></router-view>
  
            </div>
            <!-- container-fluid -->
          </div>
          <!-- content -->
  
          <footer class="footer">
            ©2023 Alvisa <span class="d-none d-sm-inline-block"> - SCRL <i class='bx bxs-pizza'></i> por
              ZOLE</span>.
          </footer>
  
        </div>
        <!-- ============================================================== -->
        <!-- Final del contenido de la página -->
        <!-- ============================================================== -->
  
  
      </div>
      <!-- END wrapper -->
  </template>

