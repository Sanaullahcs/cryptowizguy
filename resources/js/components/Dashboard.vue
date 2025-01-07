<template>
  <layout v-if="loggedIn">
    <!-- && user.is_admin === 1 -->
    <div class="site-wrapper">
      <section class="article-wrapper">
        <div class="article-container">
          <div class="article-block">
            <div class="entry-content">
              <h1>Welcome {{ user.first_name }}!</h1>

              <!-- <h1 v-if="user && user.first_name">Welcome {{ user.first_name }}!</h1> -->
            </div>
          </div>
        </div>
      </section>

      <section class="tabs-wrapper">
        <div class="tabs-container">
          <div class="tabs-block">
            <div id="tabs-section" class="tabs">
              <ul class="tab-head">
                <li>
                  <a
                    @click="switchTab(1)"
                    :class="{ active: activeTab === 1 }"
                    class="tab-link"
                  >
                    <span class="fa fa-dashboard" style="font-size: 22px"></span>
                    <span class="tab-label">Admin Dashboard</span></a
                  >
                </li>
                <li>
                  <a
                    @click="switchTab(2)"
                    :class="{ active: activeTab === 2 }"
                    class="tab-link"
                  >
                    <span class="fa fa-users" style="font-size: 22px"></span>
                    <span class="tab-label">User Managament</span></a
                  >
                </li>
                <!-- <li>
                  <a
                    @click="switchTab(3)"
                    :class="{ active: activeTab === 3 }"
                    class="tab-link"
                  >
                    <span class="material-icons tab-icon">face</span>
                    <span class="tab-label">Discount Managament</span></a
                  >
                </li> -->
                <!-- <li>
                                    <a
                                        @click="switchTab(3)"
                                        :class="{ active: activeTab === 3 }"
                                        class="tab-link"
                                    >
                                        <span
                                            class="fab fa-btc tab-icon"
                                            style="font-size: 22px"
                                        ></span>
                                        <span class="tab-label"
                                            >Bitcoin Transactions</span
                                        ></a
                                    >
                                </li> -->
                <li>
                  <a
                    @click="switchTab(4)"
                    :class="{ active: activeTab === 4 }"
                    class="tab-link"
                  >
                    <!-- <sp class="material-icons tab-icon">visibility</span>  -->
                    <span class="fa fa-user" style="font-size: 22px"></span>
                    <span class="tab-label">User Account</span></a
                  >
                </li>
                <li>
                  <a
                    @click="switchTab(5)"
                    :class="{ active: activeTab === 5 }"
                    class="tab-link"
                  >
                    <span class="material-icons tab-icon">settings_input_hdmi</span>
                    <span class="tab-label">Settings</span></a
                  >
                </li>
                <li>
                  <a
                    @click="switchTab(6)"
                    :class="{ active: activeTab === 6 }"
                    class="tab-link"
                  >
                    <span class="material-icons tab-icon">build</span>
                    <span class="tab-label">Subscription Plan</span></a
                  >
                </li>

                <li>
                  <a
                    @click="switchTab(7)"
                    :class="{ active: activeTab === 7 }"
                    class="tab-link"
                  >
                    <span class="material-icons tab-icon">compost</span>
                    <span class="tab-label">Subscriptions</span></a
                  >
                </li>
                <li>
                  <a
                    @click="switchTab(8)"
                    :class="{ active: activeTab === 8 }"
                    class="tab-link"
                  >
                    <span class="fa fa-address-card" style="font-size: 22px"></span>
                    <span class="tab-label">Contact Request</span></a
                  >
                </li>
                <li>
                  <a v-on:click="logout()" class="tab-link">
                    <span class="material-icons tab-icon">toll</span>
                    <span class="tab-label">Sign out</span></a
                  >
                </li>
              </ul>
              <section
                v-show="activeTab === 1"
                class="tab-body entry-content active active-content"
              >
                <!-- Success Message -->
                <div v-if="successMessage" class="text-danger w-50 p-2 bg-white">
                  {{ successMessage }}
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="text-danger w-50 p-2 bg-white">
                  {{ errorMessage }}
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <h2>Statistics of Users and Subscription</h2>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-3 col-md-6" style="margin-top: 20px">
                      <div class="card border-black">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-2">
                              <i class="fa fa-user fa-3x"></i>
                            </div>
                            <div class="col-10 text-right">
                              <h1 class="user-number-black">
                                {{ stats.total_admin_count }}
                              </h1>
                              <h6 class="user-text-black">Total Admin</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6" style="margin-top: 20px">
                      <div class="card border-black">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-2">
                              <i class="fa fa-users fa-3x"></i>
                            </div>
                            <div class="col-10 text-right">
                              <h1 class="user-number-black">
                                {{ stats.total_users }}
                              </h1>
                              <h6 class="user-text-black">Total users</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6" style="margin-top: 20px">
                      <div class="card border-black">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-2">
                              <i class="fa fa-university fa-3x"></i>
                            </div>
                            <div class="col-10 text-right">
                              <h1 class="user-number-black">
                                {{ stats.active_subscriptions }}
                              </h1>
                              <h6 class="user-text-black">Active subscriptions</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6" style="margin-top: 20px">
                      <div class="card border-black">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-2">
                              <i class="fa fa-id-card fa-3x"></i>
                            </div>
                            <div class="col-10 text-right">
                              <h1 class="user-number-black">
                                {{ stats.total_subscriptions }}
                              </h1>
                              <h6 class="user-text-black">Total Subscriptions</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6" style="margin-top: 20px">
                      <div class="card border-black">
                        <div class="card-body">
                          <div class="row row pb-3">
                            <div class="col-2">
                              <i class="fas fa-money-check-alt fa-3x"></i>
                            </div>
                            <div class="col-10 text-right">
                              <h1 class="user-number-black">
                                $
                                {{ stats.total_revenue }}
                              </h1>
                              <h6 class="user-text-black pt-4">Total Revenue</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6" style="margin-top: 20px">
                      <div class="card border-black">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-2">
                              <i class="fa-solid fa-clock fa-3x"></i>
                            </div>
                            <div class="col-10 text-right">
                              <h1 class="user-number-black">
                                {{ stats.total_expiring_30_days }}
                              </h1>
                              <h6 class="user-text-black">
                                Total users expiring in less than or equal to 30 days
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6" style="margin-top: 20px">
                      <div class="card border-black">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-2">
                              <i class="fa-solid fa-clock fa-3x"></i>
                            </div>
                            <div class="col-10 text-right">
                              <h1 class="user-number-black">
                                {{ stats.total_expiring_60_days }}
                              </h1>
                              <h6 class="user-text-black">
                                Total users expiring in less than or equal to 60 days
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6" style="margin-top: 20px">
                      <div class="card border-black">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-2">
                              <i class="fa-solid fa-clock fa-3x"></i>
                            </div>
                            <div class="col-10 text-right">
                              <h1 class="user-number-black">
                                {{ stats.total_expiring_90_days }}
                              </h1>
                              <h6 class="user-text-black">
                                Total users expiring in less than or equal to 90 days
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6" style="margin-top: 20px">
                      <div class="card border-black">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-2">
                              <i class="fa-solid fa-clock fa-3x"></i>
                            </div>
                            <div class="col-10 text-right">
                              <h1 class="user-number-black">
                                {{ stats.total_expiring_greater_than_90_days }}
                              </h1>
                              <h6 class="user-text-black">
                                Total users expiring in greater than 90 days
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6" style="margin-top: 20px">
                      <div class="card border-black">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-12">
                              <i class="fa-regular fa-envelope fa-3x"></i>
                            </div>
                            <div class="row p-2 pl-3">
                              <div class="col-8 text-left">
                                <h5 class="">Answered</h5>
                              </div>
                              <div class="col-4 text-right">
                                <h4 class="user-number-black">
                                  {{ stats.total_answered }}
                                </h4>
                              </div>
                            </div>
                            <div class="row pl-3">
                              <div class="col-8 text-left">
                                <h5 class="">Declined</h5>
                              </div>
                              <div class="col-4 text-right">
                                <h4 class="user-number-black">
                                  {{ stats.total_declined }}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <!-- <div class="col-md-12">
                    <canvas ref="revenueChart" width="400" height="200"></canvas>
                  </div> -->
                  </div>
                </div>
              </section>

              <section
                v-show="activeTab === 2"
                class="tab-body entry-content active active-content"
              >
                <!-- Success Message -->
                <div v-if="successMessage" class="text-danger w-50 p-2 bg-white">
                  {{ successMessage }}
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="text-danger w-50 p-2 bg-white">
                  {{ errorMessage }}
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <h2>Users</h2>
                  </div>

                  <div class="col-md-3 text-right">
                    <button
                      data-toggle="modal"
                      @click="CreateUser()"
                      data-target="#myModalCreateUser"
                      class="btn btn-sm btn-primary"
                    >
                      Create Admin User</button
                    >&nbsp; &nbsp;
                    <button
                      data-toggle="modal"
                      @click="InviteUser()"
                      data-target="#myModalInviteUser"
                      class="btn btn-sm btn-primary"
                    >
                      Invite User
                    </button>
                  </div>
                  <div class="col-md-3">
                    <button
                      data-toggle="modal"
                      data-target="#myModalshowRefralerUser"
                      class="btn-primary btn btn-sm"
                      @click="generateSignupLink"
                    >
                      Generate Signup Link
                    </button>
                  </div>
                  <div class="col-md-3 text-right">
                    <select
                      v-model="selectedFilter"
                      class="form-control"
                      @change="updateTable"
                    >
                      <option value="all">All Users</option>
                      <option value="admin">Admin Users</option>
                      <option value="kickstarter">Kickstarter Users</option>
                      <option value="regular">Regular Users</option>
                    </select>
                  </div>
                </div>
                <div class="">
                  <table
                    id="userTable"
                    class="table table-striped table-bordered display nowrap"
                    style="font-size: 17px; width: 100%"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <!-- <th>Created At</th> -->
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(data, index) in filteredUsers" :key="index">
                        <td>{{ data.id }}</td>
                        <td>
                          {{ data.first_name }}
                          {{ data.last_name }}
                        </td>
                        <td>{{ data.email }}</td>
                        <td v-if="isSuperAdmin == 1">
                          <span v-if="data.is_admin === 1" class="badge badge-success"
                            >Admin</span
                          >
                          <span
                            v-else-if="data.is_kickstarter === 1"
                            class="badge badge-warning"
                            >Kickstarter</span
                          >
                          <span v-else class="badge badge-primary">User</span>
                        </td>

                        <td v-else>
                          <span
                            v-if="data.is_kickstarter === 1"
                            class="badge badge-warning"
                            >Kickstarter</span
                          >
                          <span v-else class="badge badge-primary">User</span>
                        </td>
                        <!-- <td>{{ formatDate(data.created_at) }}</td> -->

                        <td class="text-center">
                          <button
                            data-toggle="modal"
                            data-target="#myModaluser"
                            class="btn btn-sm btn-primary"
                            @click="confirmDeleteUser(data.id)"
                          >
                            <i class="fa fa-trash"></i>
                          </button>
                          &nbsp; &nbsp;
                          <button
                            data-toggle="modal"
                            data-target="#myModalshowEditUser"
                            class="btn btn-sm btn-primary"
                            @click="showEditUser(data.id)"
                          >
                            <i class="fa fa-pen"></i>
                          </button>
                          <!-- kickstater -->
                          <button
                            data-toggle="modal"
                            data-target="#myModalshowKickStarterUser"
                            class="btn btn-sm btn-primary ml-3"
                            @click="
                              showKickStarterUser(
                                data.id,
                                data.is_kickstarter === 1 ? 'Remove' : 'Add'
                              )
                            "
                          >
                            {{
                              data.is_kickstarter === 1
                                ? "Remove Kickstarter"
                                : "Make Kickstarter"
                            }}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <!-- <section
                                v-show="activeTab === 3"
                                class="tab-body entry-content active active-content"
                            >
                                 Success Message 
                                <div
                                    v-if="successMessage"
                                    class="text-danger w-50 p-2 bg-white"
                                >
                                    {{ successMessage }}
                                </div>

                                 Error Message
                                <div
                                    v-if="errorMessage"
                                    class="text-danger w-50 p-2 bg-white"
                                >
                                    {{ errorMessage }}
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h2>List of Discount</h2>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <button
                                            data-toggle="modal"
                                            @click="showCouponCode()"
                                            data-target="#myModal"
                                            class="btn btn-sm btn-primary"
                                        >
                                            Create Discount code</button
                                        >&nbsp; &nbsp;
                                        <button
                                            data-toggle="modal"
                                            @click="showCouponCodeDiscount()"
                                            data-target="#myModalDiscount"
                                            class="btn btn-sm btn-primary"
                                        >
                                            Add Registration Discount
                                        </button>
                                    </div>
                                </div>
                                <div class="">
                                    <table
                                        id="discountTable"
                                        class="table table-striped table-bordered display nowrap"
                                        style="font-size: 17px; width: 100%"
                                    >
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Discount name</th>
                                                 <th>coupon Code</th> 
                                                <th>Discount</th>
                                                <th>Status</th>
                                                 <th>Created At</th> 
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(
                                                    coupon, index
                                                ) in coupons"
                                                :key="index"
                                            >
                                                <td>{{ coupon.id }}</td>
                                                <td>{{ coupon.code }}</td>
                                                 <td>{{ coupon.stripe_coupon_id }}</td> 
                                                <td>% {{ coupon.discount }}</td>
                                                <td>
                                                    <span
                                                        v-if="
                                                            coupon.is_active ==
                                                            true
                                                        "
                                                        :class="
                                                            coupon.is_active ==
                                                            true
                                                                ? 'badge badge-success'
                                                                : 'badge badge-danger'
                                                        "
                                                    >
                                                        {{
                                                            coupon.is_active ==
                                                            true
                                                                ? "Active"
                                                                : "Disabled"
                                                        }}
                                                    </span>
                                                    <span
                                                        v-else
                                                        :class="
                                                            coupon.is_active ===
                                                            1
                                                                ? 'badge badge-success'
                                                                : 'badge badge-danger'
                                                        "
                                                    >
                                                        {{
                                                            coupon.is_active ===
                                                            1
                                                                ? "Active"
                                                                : "Disabled"
                                                        }}
                                                    </span>
                                                </td>

                                                 <td>{{ formatDate(coupon.created_at) }}</td> 

                                                <td class="text-center">
                                                    <button
                                                        data-toggle="modal"
                                                        data-target="#myModal2"
                                                        class="btn btn-sm btn-primary"
                                                        @click="
                                                            confirmDelete(
                                                                coupon.id
                                                            )
                                                        "
                                                    >
                                                        <i
                                                            class="fa fa-trash"
                                                        ></i>
                                                    </button>
                                                    &nbsp; &nbsp;
                                                    <button
                                                        data-toggle="modal"
                                                        data-target="#editCouponModal"
                                                        class="btn btn-sm btn-primary"
                                                        @click="
                                                            showEditCouponModal(
                                                                coupon.id
                                                            )
                                                        "
                                                    >
                                                        <i
                                                            class="fa fa-pen"
                                                        ></i>
                                                    </button>
                                                    &nbsp; &nbsp;
                                                    <button
                                                        data-toggle="modal"
                                                        data-target="#emailModal"
                                                        class="btn btn-sm btn-primary"
                                                        @click="
                                                            showEmailModal(
                                                                coupon.id
                                                            )
                                                        "
                                                    >
                                                        <i
                                                            class="fa fa-envelope"
                                                        ></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>  -->

              <!-- <section
                                v-show="activeTab === 3"
                                class="tab-body entry-content active active-content"
                            >
                                <div
                                    v-if="successMessage"
                                    class="alert alert-success w-50 p-2"
                                >
                                    {{ successMessage }}
                                </div>
                                <div
                                    v-if="errorMessage"
                                    class="alert alert-danger w-50 p-2"
                                >
                                    {{ errorMessage }}
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-4">
                                        <h2>Bitcoin Transactions</h2>
                                    </div>
                                    <div class="col-md-4">
                                        <button
                                            v-if="showAuthModal"
                                            class="btn btn-primary"
                                            @click="reauthenticate"
                                        >
                                            Re-authenticate
                                        </button>
                                         Other component content 
                                    </div>
                                    <div class="col-md-4 text-right">
                                        <select
                                            v-model="filterStatus"
                                            class="form-control"
                                        >
                                            <option value="all">
                                                All Users
                                            </option>
                                            <option value="1">
                                                Verified Users
                                            </option>
                                            <option value="0">
                                                Unverified Users
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-3">
                  <div class="col-md-4">
                   
                  </div>
                </div> 
                                <div class="table-responsive">
                                    <table
                                        id="bitcoinTransactionTable"
                                        class="table table-striped table-bordered display nowrap"
                                        style="font-size: 17px; width: 100%"
                                    >
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>BTC Username</th>
                                                <th>BTC Price</th>
                                                <th>User Name</th>
                                                <th>Verification Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(
                                                    transaction, index
                                                ) in filteredTransactions"
                                                :key="index"
                                            >
                                                <td>{{ transaction.id }}</td>
                                                <td>
                                                    {{
                                                        transaction.btc_username
                                                    }}
                                                </td>
                                                <td>
                                                    {{ transaction.btc_price }}
                                                </td>
                                                <td>
                                                    {{
                                                        transaction.coinbase_trans_name
                                                    }}
                                                </td>
                                                <td>
                                                    <span
                                                        :class="
                                                            transaction.btc_verify ==
                                                            1
                                                                ? 'badge badge-success'
                                                                : 'badge badge-danger'
                                                        "
                                                    >
                                                        {{
                                                            transaction.btc_verify ==
                                                            1
                                                                ? "Verified"
                                                                : transaction.btc_verify ==
                                                                  "---"
                                                                ? "Not Verified"
                                                                : "Not Verified"
                                                        }}
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section> -->

              <section
                v-show="activeTab === 4"
                class="tab-body entry-content active active-content"
              >
                <div v-if="successMessage" class="text-danger w-50 p-2 bg-white">
                  {{ successMessage }}
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="text-danger w-50 p-2 bg-white text-white">
                  {{ errorMessage }}
                </div>
                <form
                  class="needs-validation"
                  novalidate
                  @submit.prevent="UpdateUserInfo"
                >
                  <div class="card col-lg-12">
                    <div class="">
                      <h3 class="pt-2 pb-0">
                        <strong>Personal Information</strong>
                      </h3>
                      <hr class="hr_line" />
                      <div class="form-row">
                        <div class="col-md-4 mb-3">
                          <label for="validationTooltip01">First name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationTooltip01"
                            placeholder="First name"
                            v-model="user.first_name"
                          />
                        </div>
                        <div class="col-md-4 mb-3">
                          <label for="validationTooltip02">Last name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationTooltip02"
                            placeholder="Last name"
                            v-model="user.last_name"
                          />
                        </div>
                        <div class="col-md-4 mb-3">
                          <label for="validationTooltipUsername">Email</label>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              v-model="user.email"
                              placeholder="Email"
                              disabled
                            />
                          </div>
                        </div>
                        <div class="row pb-2">
                          <div class="col-md-12 ml-1">
                            <button data-toggle="modal" class="btn btn-sm btn-primary">
                              Update Account
                            </button>
                          </div>
                        </div>
                      </div>
                      <h3 class="pt-2 pb-0">
                        <strong>Change Password</strong>
                      </h3>
                      <hr class="hr_line" />
                      <div class="form-row">
                        <div class="col-md-4 mb-3">
                          <label for="validationTooltip03">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="validationTooltip03"
                            placeholder="Password"
                            v-model="user.password"
                            required
                          />
                        </div>
                        <div class="col-md-4 mb-3">
                          <label for="validationTooltip04">Confirm Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="validationTooltip04"
                            placeholder="Confirm Password"
                            v-model="user.password_confirmation"
                            required
                          />
                          <div v-if="passwordsDoNotMatch" class="text-danger">
                            Passwords do not match.
                          </div>
                        </div>
                      </div>
                      <div class="row pb-2">
                        <div class="col-md-12">
                          <button
                            class="btn btn-sm btn-primary"
                            type="submit"
                            :disabled="passwordsDoNotMatch"
                          >
                            Update Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div
                  id="tandpmodal"
                  class="modal fade bd-example-modal-lg"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="tandpmodal"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Terms and Privacy</h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div id="accordion">
                          <div class="card">
                            <div class="card-header" id="headingOne">
                              <h5 class="mb-0">
                                <button
                                  class="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  Terms and Conditions
                                </button>
                              </h5>
                            </div>

                            <div
                              id="collapseOne"
                              class="collapse show"
                              aria-labelledby="headingOne"
                              data-parent="#accordion"
                            >
                              <div class="card-body">
                                <ul class="list-group">
                                  <li class="list-group-item">Cras justo odio</li>
                                  <li class="list-group-item">Dapibus ac facilisis in</li>
                                  <li class="list-group-item">Morbi leo risus</li>
                                  <li class="list-group-item">Porta ac consectetur ac</li>
                                  <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="card">
                            <div class="card-header" id="headingTwo">
                              <h5 class="mb-0">
                                <button
                                  class="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  Privacy Policy
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapseTwo"
                              class="collapse"
                              aria-labelledby="headingTwo"
                              data-parent="#accordion"
                            >
                              <div class="card-body">
                                <ul class="list-group">
                                  <li class="list-group-item">Cras justo odio</li>
                                  <li class="list-group-item">Dapibus ac facilisis in</li>
                                  <li class="list-group-item">Morbi leo risus</li>
                                  <li class="list-group-item">Porta ac consectetur ac</li>
                                  <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                v-show="activeTab === 5"
                class="tab-body entry-content active active-content"
              >
                <div v-if="successMessage" class="text-danger w-50 p-2 bg-white">
                  {{ successMessage }}
                </div>
                <form class="needs-validation" novalidate @submit.prevent="UpdateSetting">
                  <div class="card col-lg-12">
                    <div class="">
                      <h3 class="pt-2 pb-0">
                        <strong>Settings</strong>
                      </h3>
                      <hr class="hr_line" />
                      <div class="form-row">
                        <div class="col-md-4 mb-3">
                          <label for="validationTooltip01">From Email</label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationTooltip01"
                            placeholder="From Email"
                            v-model="fromemail"
                          />
                        </div>
                      </div>

                      <div class="row pb-2">
                        <div class="error error pl-3 pb-0 pt-0">
                          <p class="text-danger text-white" v-if="errorMessage">
                            {{ errorMessage }}
                          </p>
                        </div>
                        <div class="col-md-12 ml-1">
                          <button data-toggle="modal" class="btn btn-sm btn-primary">
                            Update Account
                          </button>
                        </div>
                      </div>

                      <hr class="hr_line" />
                    </div>
                  </div>
                </form>
              </section>

              <section
                v-show="activeTab === 6"
                class="tab-body entry-content active active-content"
              >
                <!-- Success Message -->
                <div v-if="successMessage" class="text-danger w-50 p-2 bg-white">
                  {{ successMessage }}
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="text-danger w-50 p-2 bg-white text-white">
                  {{ errorMessage }}
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <h2>Subscription Plan</h2>
                  </div>
                  <div class="col-md-6 text-right">
                    <button
                      data-toggle="modal"
                      @click="showsubscriptionplan('add')"
                      data-target="#myModalsubscription"
                      class="btn btn-sm btn-primary"
                    >
                      Create Subscription Plan</button
                    >&nbsp; &nbsp;
                  </div>
                </div>
                <div class="">
                  <table
                    id="subscriptionPlanTable"
                    class="table table-striped table-bordered display nowrap"
                    style="font-size: 17px; width: 100%"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <!-- <th>Product ID</th> -->
                        <!-- <th>Price ID</th> -->
                        <th>Discount %</th>
                        <th>Payable After Discount</th>
                        <th>Duration</th>
                        <th>Best Value</th>
                        <th>Status</th>
                        <!-- <th>Created At</th> -->
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(plan, index) in subscriptions.subscription"
                        :key="index"
                      >
                        <td>{{ plan.id }}</td>
                        <td>{{ plan.name }}</td>
                        <td>{{ plan.description }}</td>
                        <td>$ {{ plan.price }}</td>
                        <td>
                          {{ plan.plansdiscount }}
                        </td>
                        <td>
                          $
                          {{ calculateDiscountedPrice(plan) }}
                        </td>
                        <!-- <td>{{ plan.product_id }}</td> -->
                        <!-- <td>{{ plan.price_id }}</td> -->
                        <td>{{ plan.duration }}</td>
                        <td>
                          <span>
                            {{ plan.best_value === 1 ? "Yes" : "No" }}
                          </span>
                        </td>
                        <td>
                          <div class="form-switch status-checker">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              :id="'flexSwitchCheckDefault' + plan.id"
                              v-model="plan.plansStatus"
                              @change="handleStatusChange(plan.id, plan.plansStatus)"
                            />
                          </div>
                        </td>
                        <!-- <td>{{ formatDate(plan.created_at) }}</td> -->
                        <td class="text-center">
                          <button
                            data-toggle="modal"
                            data-target="#myModadeletesubscription"
                            class="btn btn-sm btn-primary"
                            @click="confirmDeleteSubscription(plan.id)"
                          >
                            <i class="fa fa-trash"></i>
                          </button>
                          &nbsp; &nbsp;
                          <button
                            data-toggle="modal"
                            @click="showEditSubscriptionModal(plan.id)"
                            data-target="#editSubscriptionModal"
                            class="btn btn-sm btn-primary"
                          >
                            <i class="fa fa-pen"></i>
                          </button>

                          <!-- <button
                            data-toggle="modal"
                            @click="showEditSubscriptionModal(plan.id)"
                            data-target="#editSubscriptionModal"
                            class="btn btn-sm btn-primary"
                          >
                            <i class="fa fa-trash"></i>
                          </button> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section
                v-show="activeTab === 7"
                class="tab-body entry-content active active-content"
              >
                <!-- Success Message -->
                <div v-if="successMessage" class="text-danger w-50 bg-white">
                  {{ successMessage }}
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="text-danger w-50 bg-white text-white">
                  {{ errorMessage }}
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <h2>Subscriptions</h2>
                  </div>
                  <div class="col-md-2 ml-auto">
                    <!-- add dropdown for stripe status active, expired and cancel -->
                    <select
                      class="form-control"
                      v-model="filterSubscription"
                      @change="
                        filterSubscriptions;
                        updateSubscriptionData();
                      "
                    >
                      <option value="">All</option>
                      <option value="active">Active</option>
                      <option value="expired">Expired</option>
                      <option value="canceled">Canceled</option>
                      <option value="incomplete">Trial</option>
                    </select>
                  </div>
                </div>
                <div class="">
                  <table
                    id="subscriptionsTable"
                    class="table table-striped table-bordered display nowrap buttons"
                    style="font-size: 17px; width: 100%"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Subscription name</th>
                        <th>Stripe Status</th>
                        <th>Payment Type</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th>Trial End Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(user, index) in usersubscription" :key="index">
                        <td>{{ user.id }}</td>
                        <td>
                          {{ user.user?.first_name ? user.user.first_name : "" }}
                          {{ user.user?.last_name ? " " + user.user.last_name : "" }}
                        </td>
                        <td>{{ user.name }}</td>
                        <td>
                          <span
                            v-if="user.stripe_status === 'incomplete'"
                            class="badge badge-success"
                          >
                            Trial
                          </span>
                          <span
                            v-else-if="user.stripe_status === 'complete'"
                            class="badge badge-success"
                          >
                            Active
                          </span>

                          <span v-else class="badge badge-success">
                            {{ user.stripe_status }}</span
                          >
                        </td>

                        <td>
                          <span class="badge badge-primary" v-if="user.type === 'stripe'"
                            >Stripe</span
                          >
                          <span
                            class="badge badge-primary"
                            v-else-if="user.type === 'paypal'"
                            >PayPal</span
                          >
                          <span class="badge badge-success" v-else>Free</span>
                        </td>

                        <td>
                          <span v-if="user.type === 'stripe' && user.stripe_price !== 0">
                            $
                            {{ user.stripe_price / 100 }}.00
                          </span>
                          <span
                            v-else-if="user.type === 'paypal' && user.stripe_price !== 0"
                          >
                            $
                            {{ user.stripe_price / 100 }}.00
                          </span>
                          <span
                            v-else-if="
                              user.stripe_price == 0 && user.type == 'without Payment'
                            "
                          >
                            0
                          </span>
                          <span v-else> ${{ user.stripe_price }} </span>
                        </td>

                        <td>
                          {{ formatDate(user.created_at) }}
                        </td>
                        <td>
                          {{ formatDate(user.trial_ends_at) }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section
                v-show="activeTab === 8"
                class="tab-body entry-content active active-content"
              >
                <!-- Success Message -->
                <div v-if="successMessage" class="text-danger w-50 p-2 bg-white">
                  {{ successMessage }}
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="text-danger w-50 p-2 bg-white">
                  {{ errorMessage }}
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <h2>Contact Request</h2>
                  </div>
                </div>
                <div class="">
                  <table
                    id="contcatRequest"
                    class="table table-striped table-bordered"
                    style="font-size: 17px; width: 100%"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Messaged</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(contact, index) in contacts" :key="index">
                        <td>{{ contact.id }}</td>
                        <td>
                          {{ contact.first_name }}
                          {{ contact.last_name }}
                        </td>
                        <td>{{ contact.email }}</td>
                        <td>{{ contact.subject }}</td>
                        <td style="width: 35%">
                          {{ contact.message }}
                        </td>
                        <!-- <td>{{ formatDate(contact.created_at) }}</td> -->
                        <td>
                          <label style="font-size: 13px">
                            <input
                              type="radio"
                              v-model="contact.status"
                              :value="1"
                              @change="updateStatus(contact.email, 1)"
                              :checked="contact.status == 1"
                            />
                            Answered
                          </label>
                          <label style="font-size: 13px">
                            <input
                              type="radio"
                              v-model="contact.status"
                              :value="0"
                              @change="updateStatus(contact.email, 0)"
                              :checked="contact.status == 0"
                            />
                            Declined
                          </label>
                        </td>
                        <td>
                          <button
                            data-toggle="modal"
                            data-target="#sendemailModal"
                            class="btn btn-sm btn-primary"
                            @click="sendEmailModal(contact.id)"
                          >
                            <i class="fa fa-reply"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          id="myModal"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Create Coupon Code</h4>
              </div>
              <form method="post" @submit.prevent="createCoupon">
                <div class="container">
                  <div class="form-group">
                    <label for="code">Code:</label>

                    <input
                      type="text"
                      v-model="code"
                      id="code"
                      class="form-control"
                      placeholder="Coupon Code"
                    />
                  </div>

                  <div class="form-group">
                    <label for="discount">Discount:</label>
                    <input
                      type="number"
                      v-model="discount"
                      @input="updateDiscount"
                      id="discount"
                      class="form-control"
                      min="0"
                      max="100"
                      step="0.01"
                      placeholder="Discount"
                    />
                    <p v-if="showDiscountError" class="text-danger">
                      Discount must be > 0 and &lt;= 100
                    </p>
                  </div>
                  <div class="form-group">
                    <label for="" class="form-check-label pr-2"
                      >Specific user assign discount:</label
                    >
                    <input type="checkbox" v-model="isUserDropdownVisible" />
                  </div>
                  <div v-if="isUserDropdownVisible" class="form-group">
                    <select class="form-control" v-model="selectedUserEmail">
                      <option value="">Select User</option>
                      <option
                        v-for="(data, index) in stats.users"
                        :key="index"
                        :value="data.id"
                      >
                        {{ data.email }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="one_time">One Time Use Discount:</label>
                    <input
                      type="checkbox"
                      v-model="one_time"
                      id="one_time"
                      class="m-2 pt-2"
                    />
                  </div>

                  <div class="form-group">
                    <label for="is_kickstarter_cop">kickstarter Discount:</label>
                    <input
                      type="checkbox"
                      v-model="is_kickstarter_coupon"
                      id="is_kickstarter_coupon"
                      class="m-2 pt-2"
                    />
                  </div>

                  <div class="form-group">
                    <label for="is_active">Active:</label>
                    <input
                      type="checkbox"
                      v-model="is_active"
                      id="is_active"
                      class="m-2 pt-2"
                    />
                  </div>
                  <div class="form-group">
                    <label for="expiry_date">Select Expiry Date:</label>
                    <input
                      type="Date"
                      v-model="expiry_date"
                      id="expiry_date"
                      class="m-2 input-feild-style"
                      :min="currentDate"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-sm btn-primary my-2">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          id="myModalDiscount"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add Registration Discount</h4>
              </div>
              <form method="post" @submit.prevent="SaveCoupon">
                <div class="container">
                  <div class="form-group">
                    <label for="discount">Discount:</label>
                    <input
                      type="number"
                      v-model="discount"
                      @input="updateDiscount"
                      id="discount"
                      class="form-control"
                      min="0"
                      max="100"
                      step="0.01"
                      placeholder="Discount"
                    />
                    <p v-if="showDiscountError" class="text-danger">
                      Discount must be > 0 and &lt;= 100
                    </p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-sm btn-primary my-2">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="editCouponModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="editCouponModalLabel"
          aria-hidden="true"
        >
          <!-- Add your modal content for editing a coupon here -->
          <!-- Edit Coupon Modal Content -->
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editCouponModalLabel">Edit Coupon</h5>
                <!-- Add close button or other controls as needed -->
              </div>

              <div class="container">
                <div class="form-group">
                  <label for="code">Code:</label>

                  <input
                    type="text"
                    v-model="editedCoupon.code"
                    id="code"
                    class="form-control"
                    placeholder="Coupon Code"
                  />
                </div>
                <div class="form-group">
                  <label for="discount">Discount:</label>

                  <input
                    type="number"
                    v-model="editedCoupon.discount"
                    @input="updateDiscount"
                    id="discount"
                    class="form-control"
                    min="0"
                    max="100"
                    step="0.01"
                    placeholder="Discount"
                  />
                  <p v-if="showDiscountError" class="text-danger">
                    Discount must be > 0 and &lt;= 100
                  </p>
                </div>

                <div v-if="editedCoupon.user_id" class="form-group">
                  <select class="form-control" v-model="editedCoupon.user_id">
                    <option value="">Select User</option>
                    <option
                      v-for="(data, index) in stats.users"
                      :key="index"
                      :value="data.id"
                    >
                      {{ data.email }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="one_time">One Time Use Discount:</label>
                  <input
                    type="checkbox"
                    v-model="editedCoupon.one_time"
                    id="one_time"
                    class="m-2 pt-2"
                  />
                </div>

                <div class="form-group">
                  <label for="is_active">Active:</label>
                  <input
                    type="checkbox"
                    v-model="editedCoupon.is_active"
                    id="is_active"
                    class="m-2 pt-2"
                  />
                </div>
                <!-- <button type="submit" class="btn btn-sm btn-primary my-2">Save</button> -->
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-sm btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  @click="saveEditedCoupon"
                  class="btn btn-sm btn-primary my-2"
                >
                  Update
                </button>
                <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
              </div>
            </div>
          </div>
        </div>
        <!-- email modal -->
        <div
          class="modal fade"
          id="emailModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="emailModalLabel"
          aria-hidden="true"
        >
          <!-- Add your modal content for editing a coupon here -->
          <!-- Edit Coupon Modal Content -->
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="emailModalLabel">Send Promocode to Users</h5>
                <!-- Add close button or other controls as needed -->
              </div>

              <div class="container">
                <div class="form-group">
                  <label for="emails">Emails:</label>
                  <br />
                  <small>
                    <strong>NOTE:</strong> Please enter emails separated by comma.
                  </small>
                  <textarea
                    v-model="emails"
                    id="emails"
                    rows="15"
                    class="form-control"
                    placeholder="Emails"
                  ></textarea>
                </div>
                <!-- <button type="submit" class="btn btn-sm btn-primary my-2">Save</button> -->
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-sm btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  @click="sendEmailsForPromocode"
                  class="btn btn-sm btn-primary my-2"
                >
                  Send
                  <div
                    v-if="loading"
                    class="spinner-border spinner-border-sm text-light"
                    role="status"
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                </button>
                <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
              </div>
            </div>
          </div>
        </div>

        <div
          id="myModalshowRefralerUser"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Copy KickStarter referral link</h5>
                <!-- Add close button or other controls as needed -->
              </div>

              <div class="container">
                <div v-if="signupLink" class="mt-3 mb-3 copy-link">
                  <p style="font-size: 14px">
                    {{ signupLink }}
                  </p>
                  <button
                    class="btn btn-primary btn-sm"
                    @click="copyToClipboard(this.signupLink)"
                  >
                    Copy Link
                  </button>
                  <p class="success-mesage" v-if="copySuccessMessage">
                    {{ copySuccessMessage }}
                  </p>
                </div>
                <!-- <button type="submit" class="btn btn-sm btn-primary my-2">Save</button> -->
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="sendemailModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="sendemailModalLabel"
          aria-hidden="true"
        >
          <!-- Add your modal content for editing a coupon here -->
          <!-- Edit Coupon Modal Content -->
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="sendemailModalLabel">Reply to this User</h5>
                <!-- Add close button or other controls as needed -->
              </div>

              <div class="container">
                <div class="form-group">
                  <label for="message">Message:</label>
                  <br />

                  <textarea
                    v-model="message"
                    id="message"
                    rows="15"
                    name="message"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>

                <!-- <button type="submit" class="btn btn-sm btn-primary my-2">Save</button> -->
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-sm btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  @click="sendEmailsForReply"
                  class="btn btn-sm btn-primary my-2"
                >
                  Send

                  <div
                    v-if="loading"
                    class="spinner-border spinner-border-sm text-light"
                    role="status"
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                </button>
                <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="showDeleteConfirmation"
          id="myModal2"
          class="modal fade show"
          tabindex="-1"
          role="dialog"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Confirm Delete</h5>
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Are you sure you want to delete this record?</p>
              </div>
              <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary" @click="cancelDelete">Cancel</button> -->
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Cancel
                </button>
                <!-- <button type="button" class="btn btn-secondary close" data-dismiss="modal">Cancel</button> -->
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  @click="deleteConfirmed"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- // plan subscription modal add form -->
        <div
          id="myModalsubscription"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="max-width: 700px">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Create Subscription Plan</h4>
              </div>
              <form method="post" @submit.prevent="createSubscription">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="name">Name:</label>
                        <input
                          type="text"
                          v-model="subscriptionData.name"
                          id="name"
                          class="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="description">Description:</label>
                        <input
                          type="text"
                          v-model="subscriptionData.description"
                          id="description"
                          class="form-control"
                          placeholder="Description"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="price">Price:</label>
                        <input
                          type="number"
                          v-model="subscriptionData.price"
                          id="price"
                          class="form-control"
                          step="0.01"
                          placeholder="Price"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="duration">Duration:</label>
                        <select
                          id="duration"
                          name="duration"
                          class="form-control"
                          v-model="subscriptionData.duration"
                        >
                          <option>Select Duration</option>
                          <option value="quarterly">Quarterly</option>
                          <option value="monthly">Monthly</option>
                          <option value="yearly">Yearly</option>

                          <!-- Add more options for different durations -->
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="product_id">Stripe Product id:</label>
                        <input
                          type="text"
                          v-model="subscriptionData.product_id"
                          id="product_id"
                          class="form-control"
                          placeholder="Product ID"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="name">Stripe Price id:</label>
                        <input
                          type="text"
                          v-model="subscriptionData.price_id"
                          id="price_id"
                          class="form-control"
                          placeholder="Price ID"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="product_id">PayPal Product id:</label>
                        <input
                          type="text"
                          v-model="subscriptionData.paypal_product_id"
                          id="paypal_product_id"
                          class="form-control"
                          placeholder="PayPal Product ID"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="name">PayPal Price id:</label>
                        <input
                          type="text"
                          v-model="subscriptionData.paypal_price_id"
                          id="paypal_price_id"
                          class="form-control"
                          placeholder="PayPal Price ID"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="discount_in_dollars">Discount ($):</label>
                        <input
                          type="number"
                          v-model="subscriptionData.discount_in_dollars"
                          @input="calculatePercentageDiscount"
                          id="discount_in_dollars"
                          class="form-control"
                          step="0.01"
                          placeholder="Discount in Dollars"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="discount">Discount (%):</label>
                        <input
                          type="number"
                          @input="updatePlanDiscount"
                          v-model="subscriptionData.plansdiscount"
                          id="plansdiscount"
                          class="form-control"
                          step="0.01"
                          placeholder="Discount"
                        />
                        <p v-if="showPlanDiscountError" class="text-danger">
                          Discount must be > 0 and &lt;= 100
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="plan_type">Subscription Plan Type:</label>
                        <select
                          id="plan_type"
                          v-model="subscriptionData.plan_type"
                          class="form-control"
                        >
                          <option value="" disabled hidden>Select Plan Type</option>
                          <option value="introductory">Introductory</option>
                          <option value="kickstarter">Kickstarter</option>
                          <option value="renewal">Renewal</option>
                          <option value="general">General</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="is_kickstarter_plan">Is Kickstarter Plan:</label>
                        <br />
                        <input
                          type="checkbox"
                          v-model="subscriptionData.is_kickstarter_plan"
                          id="is_kickstarter_plan"
                          class="m-2 pt-2"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="best_value">Best Value (Enable/Disabled):</label>
                        <br />
                        <input
                          type="checkbox"
                          v-model="subscriptionData.best_value"
                          id="best_value"
                          class="m-2 pt-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button type="submit" class="btn btn-sm btn-primary my-2">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!--  -->
        <!-- paln delete model -->
        <div
          v-if="showDeleteConfirmationSubscription"
          id="myModadeletesubscription"
          class="modal fade show"
          tabindex="-1"
          role="dialog"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Confirm Delete</h5>
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Are you sure you want to delete this record?</p>
              </div>
              <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary" @click="cancelDelete">Cancel</button> -->
                <button
                  type="button"
                  class="btn btn-sm btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <!-- <button type="button" class="btn btn-secondary close" data-dismiss="modal">Cancel</button> -->
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  @click="deleteConfirmedSubscription"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- edit modal -->
        <div
          class="modal fade"
          id="editSubscriptionModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="editCouponModalLabel"
          aria-hidden="true"
        >
          <!-- Add your modal content for editing a coupon here -->
          <!-- Edit Coupon Modal Content -->
          <div class="modal-dialog" role="document" style="max-width: 700px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editSubscriptionModalLabel">
                  Edit Subscription
                </h5>
                <!-- Add close button or other controls as needed -->
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Name:</label>
                      <input
                        type="text"
                        v-model="subscriptionData.name"
                        id="name"
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="description">Description:</label>
                      <input
                        type="text"
                        v-model="subscriptionData.description"
                        id="description"
                        class="form-control"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="price">Price:</label>
                      <input
                        type="number"
                        v-model="subscriptionData.price"
                        id="price"
                        class="form-control"
                        step="0.01"
                        placeholder="Price"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="duration">Duration:</label>
                      <select
                        id="duration"
                        name="duration"
                        class="form-control"
                        v-model="subscriptionData.duration"
                      >
                        <option value="" disabled>Select Duration</option>
                        <option :value="subscriptionData.duration" selected>
                          {{ getDurationLabel(subscriptionData.duration) }}
                        </option>
                        <option value="yearly">Yearly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <!-- Add more options for different durations -->
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="product_id">Product id:</label>
                      <input
                        type="text"
                        v-model="subscriptionData.product_id"
                        id="product_id"
                        class="form-control"
                        placeholder="Product ID"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Price id:</label>
                      <input
                        type="text"
                        v-model="subscriptionData.price_id"
                        id="price_id"
                        class="form-control"
                        placeholder="Price ID"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="product_id">Paypal Product id:</label>
                      <input
                        type="text"
                        v-model="subscriptionData.paypal_product_id"
                        id="paypal_product_id"
                        class="form-control"
                        placeholder="Paypal Product ID"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Paypal Price id:</label>
                      <input
                        type="text"
                        v-model="subscriptionData.paypal_price_id"
                        id="paypal_price_id"
                        class="form-control"
                        placeholder="Paypal Price ID"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="discount_dollars">Discount ($):</label>
                      <input
                        type="number"
                        v-model="discountDollars"
                        @input="calculateDiscountPercentage"
                        id="discount_dollars"
                        class="form-control"
                        step="0.01"
                        placeholder="Discount in Dollars"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="discount">Discount (%):</label>
                      <input
                        type="number"
                        @input="updatePlanDiscount"
                        v-model="subscriptionData.plansdiscount"
                        id="plansdiscount"
                        class="form-control"
                        step="0.01"
                        placeholder="Discount"
                      />
                      <p v-if="showPlanDiscountError" class="text-danger">
                        Discount must be > 0 and &lt;= 100
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="plan_type">Subscription Plan Type:</label>
                      <select
                        id="plan_type"
                        v-model="subscriptionData.plan_type"
                        class="form-control"
                      >
                        <option value="" disabled hidden>Select Plan Type</option>
                        <option value="introductory">Introductory</option>
                        <option value="kickstarter">Kickstarter</option>
                        <option value="renewal">Renewal</option>
                        <option value="general">General</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="is_kickstarter_plan">Is Kickstarter Plan:</label>
                      <br />
                      <input
                        type="checkbox"
                        v-model="subscriptionData.is_kickstarter_plan"
                        :checked="
                          subscriptionData.is_kickstarter_plan === 1 ? true : false
                        "
                        id="is_kickstarter_plan"
                        class="m-2 pt-2"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="best_value">Best Value (Enable/Disabled):</label>
                      <br />
                      <input
                        type="checkbox"
                        v-model="subscriptionData.best_value"
                        id="best_value"
                        class="m-2 pt-2"
                        :checked="subscriptionData.best_value === 1 ? true : false"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-sm btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  @click="updatesubscriptionplan"
                  class="btn btn-sm btn-primary my-2"
                >
                  Update Subscription
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="showDeleteConfirmationUser"
          id="myModaluser"
          class="modal fade show"
          tabindex="-1"
          role="dialog"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Confirm Delete User</h5>
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Are you sure you want to delete this record?</p>
              </div>
              <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary" @click="cancelDelete">Cancel</button> -->
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Cancel
                </button>
                <!-- <button type="button" class="btn btn-secondary close" data-dismiss="modal">Cancel</button> -->
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  @click="deleteConfirmedUser"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- // plan subscription modal add form -->
        <div
          id="myModalCreateUser"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="max-width: 700px">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Create Admin User</h4>
              </div>
              <form action="" autocomplete="off">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="my-2">First Name</label>
                        <input
                          type="text"
                          v-model="user.firstName"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="John"
                          autocomplete="off"
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.firstName"
                        >
                          {{ errors.firstName[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="my-2">Last Name</label>
                        <input
                          type="text"
                          v-model="user.lastName"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Doe"
                          autocomplete="off"
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.lastName != undefined"
                        >
                          {{ errors.lastName[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="my-2">Email</label>
                        <input
                          type="email"
                          v-model="user.email"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="example@gmail.com"
                          autocomplete="off"
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.email != undefined"
                        >
                          {{ errors.email[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1" class="my-2">Password</label>
                        <input
                          type="password"
                          v-model="user.password"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputPassword1"
                          placeholder="********"
                          autocomplete="off"
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.password != undefined"
                        >
                          {{ errors.password[0] }}
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1" class="my-2"
                          >Re-Enter Password</label
                        >
                        <input
                          type="password"
                          v-model="user.password_confirmation"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputPassword1"
                          placeholder="********"
                          autocomplete="off"
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.password_confirmation != undefined"
                        >
                          {{ errors.password_confirmation[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-primary my-2"
                          v-on:click="createAccount()"
                        >
                          Save
                          <div
                            v-if="loading"
                            class="spinner-border spinner-border-sm text-light"
                            role="status"
                          >
                            <span class="sr-only">Loading...</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          id="myModalInviteUser"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="max-width: 700px">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Invite User</h4>
              </div>
              <form action="" autocomplete="off">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="my-2">Email</label>
                        <input
                          type="email"
                          v-model="inviteEmail"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="example@gmail.com"
                          autocomplete="off"
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.email"
                        >
                          {{ errors.email[0] }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-primary my-2"
                      v-on:click="createAccountSetting()"
                    >
                      Save
                      <div
                        v-if="loading"
                        class="spinner-border spinner-border-sm text-light"
                        role="status"
                      >
                        <span class="sr-only">Loading...</span>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          id="myModalshowEditUser"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="max-width: 700px">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Update User</h4>
              </div>
              <form action="" autocomplete="off">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="my-2">First Name</label>
                        <input
                          type="text"
                          v-model="user.firstName"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="John"
                          autocomplete="off"
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.firstName"
                        >
                          {{ errors.firstName[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="my-2">Last Name</label>
                        <input
                          type="text"
                          v-model="user.lastName"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Doe"
                          autocomplete="off"
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.lastName != undefined"
                        >
                          {{ errors.lastName[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="my-2">Email</label>
                        <input
                          type="email"
                          v-model="user.email"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="example@gmail.com"
                          autocomplete="off"
                          disabled
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.email != undefined"
                        >
                          {{ errors.email[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1" class="my-2">Password</label>
                        <input
                          type="password"
                          v-model="user.password"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputPassword1"
                          placeholder="********"
                          autocomplete="off"
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.password != undefined"
                        >
                          {{ errors.password[0] }}
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1" class="my-2"
                          >Re-Enter Password</label
                        >
                        <input
                          type="password"
                          v-model="user.password_confirmation"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputPassword1"
                          placeholder="********"
                          autocomplete="off"
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.password_confirmation != undefined"
                        >
                          {{ errors.password_confirmation[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-primary my-2"
                          v-on:click="UpdateUserAccount()"
                        >
                          Save
                          <div
                            v-if="loading"
                            class="spinner-border spinner-border-sm text-light"
                            role="status"
                          >
                            <span class="sr-only">Loading...</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- aouth model -->
        <div
          id="authModal"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="authModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="max-width: 500px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="authModalLabel">Session Expired</h5>
                <button type="button" class="close" @click="toggleAuthModal(false)">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Your session has expired. Please re-authenticate to continue.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="toggleAuthModal(false)"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary" @click="reauthenticate">
                  Re-authenticate
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="myModalshowKickStarterUser"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="max-width: 700px">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Create KickStarter User</h4>
              </div>
              <form action="" autocomplete="off">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="my-2">First Name</label>
                        <input
                          type="text"
                          v-model="user.firstName"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="John"
                          autocomplete="off"
                          disabled
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.firstName"
                        >
                          {{ errors.firstName[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="my-2">Last Name</label>
                        <input
                          type="text"
                          v-model="user.lastName"
                          class="my-2 form-control bg-primary text-white"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Doe"
                          autocomplete="off"
                          disabled
                        />
                      </div>
                      <div class="error">
                        <p
                          class="text-danger w-100 text-center bg-white text-white"
                          v-if="errors && errors.lastName != undefined"
                        >
                          {{ errors.lastName[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="one_time">Make User KickStarter</label>
                      <input
                        type="checkbox"
                        v-model="is_kickstarter"
                        id="is_kickstarter"
                        class="m-2 pt-2"
                      />
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-primary my-2"
                          v-on:click="CreateKickstaterUserAccount()"
                        >
                          Save
                          <div
                            v-if="loading"
                            class="spinner-border spinner-border-sm text-light"
                            role="status"
                          >
                            <span class="sr-only">Loading...</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- paln delete model -->
      </section>
    </div>
  </layout>
  <span v-else>
    <Unauthorized v-if="showComponent" />
  </span>
</template>
<script>
import Layout from "./Layout.vue";
import Unauthorized from "./Unauthorized.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import Chart from "chart.js/auto";
import axios from "axios";
import $ from "jquery";
import "datatables.net";
export default {
  name: "Home",

  components: {
    Layout,
    Unauthorized,
  },
  beforeUnmount() {},
  created() {},

  data() {
    return {
      showAuthModal: false,
      isSuperAdmin: null,
      mode: "",
      copySuccessMessage: "",
      status: "", // Will be updated based on the selected radio button
      selectedFilter: "all",
      signupLink: null,
      key: "",
      showReauthenticationButton: false,
      users: [],
      editedCoupon: {
        id: null,
        user_id: "",
        code: "",
        discount: "",
        stripe_coupon_id: "",
        one_time: "",

        // Add other fields as needed
      },
      plansStatus: [],
      isUserDropdownVisible: false,
      selectedUserEmail: "",
      monthlyRevenueData: [],
      is_kickstarter: false,
      is_kickstarter_coupon: 0,
      user: {
        id: null,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        // other user properties
        is_kickstarter: false,
      },

      loading: false,
      errors: {
        firstName: [],
        lastName: [],
        email: [],
        password: [],
        password_confirmation: [],
        fromemail: [],
      },
      toast: null,
      subscriptionData: {
        id: null,
        name: "",
        description: "",
        price: null,
        product_id: "",
        price_id: "",
        paypal_product_id: "",
        paypal_price_id: "",
        duration: "",
        best_value: "",
        plansdiscount: "",
        discount_in_dollars: 0,
        is_kickstarter_plan: "",
        plan_type: "",
      },
      transactions: [],
      subscriptionToEdit: null,
      passwordsDoNotMatch: false,
      code: "",
      discount: 0,
      fromemail: "",
      is_active: 0, // Initialize with 0 for unchecked
      one_time: 0,

      Kickstarter_variable: 0,
      successMessage: null,
      errorMessage: null,
      processing: false,
      activeTab: 1,
      contacts: [], // Ensure contacts array is initialized
      coupons: [],
      subscriptions: [],
      filterStatus: "all",
      myModalshowRefralerUser: false,
      filterSubscription: "",
      deleteCouponId: null, // To store the ID of the coupon to delete
      deletesubscriptionId: null, // To store the ID of the coupon to delete
      showDeleteConfirmation: false, // To control the visibility of the delete confirmation dialog
      showDeleteConfirmationUser: false, // To control the visibility of the delete confirmation dialog
      showDeleteConfirmationSubscription: false, // To control the visibility of the delete confirmation dialog
      showCouponCodeModal: false, // To control the visibility of the delete confirmation dialog
      showCouponCodeDiscountModal: false,
      InviteUserModal: false, // To control the visibility of the delete confirmation dialog

      CreateUserModal: false, // To control the visibility of the delete confirmation dialog
      showEditUserModal: false,
      myModalshowKickStarterUser: false,
      CreateEditUserModal: false, // To control the visibility of the delete confirmation dialog
      inviteEmail: "",
      showsubscriptionplanModal: false,
      isModalVisible: false,
      discount: 0,
      expiry_date: new Date(),
      currentDate: new Date().toISOString().slice(0, 10),
      loggedIn: false,
      showDiscountError: false,
      usersubscriptsion: [],
      users: [],
      loginuser: "",
      showComponent: false,
      activeCouponForEmails: null,

      emails: "",
      stats: {
        users: [],
        total_users: 0,
        total_admin_count: 0,
        active_subscriptions: 0,
        total_subscriptions: 0,
        total_revenue: 0,
        total_revenue: 0,
        total_answered: 0,
        total_declined: 0,
        total_expiring_30_days: 0,
        total_expiring_60_days: 0,
        total_expiring_90_days: 0,
        total_expiring_greater_than_90_days: 0,
      },
    };
  },
  watch: {
    discount(newDiscount) {
      console.log(newDiscount);
      if (newDiscount < 0 || newDiscount > 100) {
        console.log("true", newDiscount);
        this.showDiscountError = true;
      } else {
        this.showDiscountError = false;
      }
    },

    status(newValue) {
      console.log("Status changed:", newValue);
    },
  },
  // mounted() {
  //   // this.$nextTick(() => {
  //   //   $("#example").DataTable({
  //   //     paging: true,
  //   //     // Add your DataTable options here, if any
  //   //   });
  //   // });
  //   // this.initDataTable();

  //   this.$nextTick(() => {
  //     if (!$.fn.DataTable.isDataTable("#example")) {
  //       $("#example").DataTable({
  //         paging: true,
  //         // Add your DataTable options here, if any
  //       });
  //     }
  //   });

  //   setTimeout(() => {
  //     this.showComponent = true;
  //   }, 5000);
  //   this.loggedIn =
  //     localStorage.getItem("user") && localStorage.getItem("verification") ? true : false;
  //   console.log("login user", this.loggedIn);
  //   this.getCoupons();
  //   this.getUsers();
  //   this.getContacts();
  //   this.getsubscriptionplans();
  //   const authToken = "Bearer " + localStorage.getItem("token"); // Replace with your storage method
  //   axios
  //     .get("/api/user", {
  //       headers: {
  //         Authorization: authToken,
  //       },
  //     })
  //     .then((response) => {
  //       this.user = response.data;
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //     });

  //   // Convert plan_status to isActive as true/false
  //   this.$watch("subscriptions.subscription", (newValue, oldValue) => {
  //     if (newValue && Array.isArray(newValue)) {
  //       newValue.forEach((plan) => {
  //         plan.plansStatus = plan.plan_status === 1;
  //         console.log("Plan status:", plan.plansStatus);
  //       });
  //     } else {
  //       console.warn("subscriptions.subscription is not available or not an array.");
  //     }
  //   });
  // },
  mounted: async function () {
    // this.$nextTick(() => {
    //   $("#example").DataTable({
    //     paging: true,
    //     // Add your DataTable options here, if any
    //   });
    // });
    // this.initDataTable();

    await this.$nextTick(); // Wait for Vue to finish updating the DOM

    // Initialize DataTable if not already initialized
    if (!$.fn.DataTable.isDataTable("#example")) {
      $("#example").DataTable({
        paging: true,
        // Add your DataTable options here, if any
      });
    }
    // this.initDataTable();

    setTimeout(() => {
      this.showComponent = true;
    }, 5000);

    this.loggedIn =
      localStorage.getItem("user") && localStorage.getItem("verification") ? true : false;
    console.log("login user", this.loggedIn);

    const userData = localStorage.getItem("user");
    const verificationData = localStorage.getItem("verification");
    if (userData && verificationData) {
      const user = JSON.parse(userData);
      const isVerified = JSON.parse(verificationData);
      if (user && isVerified) {
        this.isSuperAdmin = user.is_superadmin;
      }
    }

    // Call functions to fetch data
    try {
      await this.getCoupons();
      await this.getUsers();
      await this.getContacts();
      await this.getsubscriptionplans();
      await this.fetchBitcoinTransactions();
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    const authToken = "Bearer " + localStorage.getItem("token"); // Replace with your storage method

    try {
      const response = await axios.get("/api/user", {
        headers: {
          Authorization: authToken,
        },
      });
      this.user = response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

    // Convert plan_status to isActive as true/false
    this.$watch(
      () => this.subscriptions.subscription,
      (newValue) => {
        if (newValue && Array.isArray(newValue)) {
          newValue.forEach((plan) => {
            plan.plansStatus = plan.plan_status === 1; // Reactively setting the property
            console.log("Plan status:", plan.plansStatus);
          });
        } else {
          console.warn("subscriptions.subscription is not available or not an array.");
        }
      },
      { immediate: true } // Run the watcher immediately after setting it up
    );

    this.checkTokenStatus();
  },

  methods: {
    async checkTokenStatus() {
      try {
        const response = await axios.get("/api/check-token-status");

        if (response.data.is_expired_token == 1) {
          this.toggleAuthModal(true);
        } else {
          console.log("Authenticated");
        }
      } catch (error) {
        console.error("Error checking token status:", error);
      }
    },
    toggleAuthModal(show) {
      this.showAuthModal = show;
      if (show) {
        $("#authModal").modal("show");
      } else {
        $("#authModal").modal("hide");
      }
    },
    reauthenticate() {
      // Redirect to the re-authentication route
      window.location.href = "/api/gmail/reauthenticate";
    },
    showNotification(message) {
      // Implement your notification logic here
      alert(message); // Example using alert
    },
    fetchBitcoinTransactions() {
      axios
        .get("/api/btc-transactions")
        .then((response) => {
          this.transactions = response.data; // Store the data in the transactions array

          this.bitcoinTransactionTable();
        })
        .catch((error) => {
          console.error("There was an error fetching the transactions:", error);
          this.errorMessage = "Failed to load transactions";
        });
    },
    handleStatusChange(planId, plansStatus) {
      console.log("dfdfdf");
      console.log("Plan ID:", planId);
      console.log("Status:", status);
      // Perform necessary actions based on the status change
    },
    calculateDiscountedPrice(plan) {
      const discountAmount = (plan.price * plan.plansdiscount) / 100;
      return (plan.price - discountAmount).toFixed(2);
    },

    calculatePercentageDiscount() {
      const price = parseFloat(this.subscriptionData.price);
      const discountInDollars = parseFloat(this.subscriptionData.discount_in_dollars);

      if (price > 0 && discountInDollars > 0) {
        const discountPercentage = (discountInDollars / price) * 100;

        // Update the discount percentage field
        this.subscriptionData.plansdiscount = discountPercentage.toFixed(2);

        // Optional: Show error if percentage exceeds 100%
        this.showPlanDiscountError = discountPercentage > 100;
      } else {
        this.subscriptionData.plansdiscount = 0;
        this.showPlanDiscountError = false;
      }
    },
    calculateDiscountPercentage() {
      if (this.subscriptionData.price > 0 && this.discountDollars >= 0) {
        this.subscriptionData.plansdiscount = (
          (this.discountDollars / this.subscriptionData.price) *
          100
        ).toFixed(2);
      } else {
        this.subscriptionData.plansdiscount = 0;
      }
    },
    calculateDiscountDollars() {
      if (this.subscriptionData.price > 0 && this.subscriptionData.plansdiscount > 0) {
        this.discountDollars = (
          (this.subscriptionData.plansdiscount / 100) *
          this.subscriptionData.price
        ).toFixed(2);
      } else {
        this.discountDollars = 0;
      }
    },
    handleStatusChange(planId, plansStatus) {
      const plan = this.subscriptions.subscription.find((plan) => plan.id === planId);
      if (plan) {
        plan.plan_status = plansStatus ? 1 : 0;
        console.log("fdfd", plan.plan_status);
        this.updatePlanStatus(planId, plan.plan_status);
      }
    },
    updatePlanStatus(planId, planStatus) {
      axios
        .put(
          `/api/subscription-plans/${planId}`,
          {
            plan_status: planStatus,
          },
          {}
        )
        .then((response) => {
          console.log("Plan status updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating plan status:", error);
        });
    },
    // Handle the status change, for example, send an API request to update the status

    async generateSignupLink() {
      this.myModalshowRefralerUser = true;
      try {
        const response = await axios.get("/api/generate-signup-link");
        console.error("responce signup link:", response);
        this.signupLink = response.data.NewSignupLink;
        console.error("generating signup link:", this.signupLink);
      } catch (error) {
        console.error("Error generating signup link:", error);
      }
    },
    async updateStatus(email, status) {
      console.log("status", status);
      console.log("email", email);

      this.loading = true;

      axios
        .post("/api/updateStatus", {
          email: email,
          status: status,
        })
        .then((response) => {
          if (response.data.status === "success") {
            this.successMessage = "Status updated successfully";
            this.errorMessage = null;
            this.contacts = response.data.contact;
          } else {
            this.errorMessage = response.data.message;
            this.successMessage = null;
            this.loading = false;
          }

          // Hide the message after 5 seconds
          setTimeout(() => {
            // this.getContacts();
            this.successMessage = null;
            this.errorMessage = null;
          }, 5000);
        })
        .catch((error) => {
          this.errorMessage = error.response.data.message;
          this.successMessage = null;
          this.loading = false;

          // Hide the message after 5 seconds
          setTimeout(() => {
            this.errorMessage = null;
          }, 5000);
        });
    },

    async getContacts() {
      try {
        const response = await axios.get("/api/list-contacts");
        this.contacts = response.data.contacts;
        console.log("contacts", this.contacts);
        this.initDataContcatRequest();
        // Process retrieved contacts as needed
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    },
    initDataContcatRequest() {
      this.$nextTick(() => {
        const table = $("#contcatRequest").DataTable({
          // DataTable options/configuration
          pageLength: 8,
          dom: "lBfrtip", // Include 'l' for length menu
          buttons: [
            {
              extend: "csv",
              text: "Export CSV", // Set a custom label for the CSV button
              filename: "contcatRequest", // Set a custom filename for CSV
            },
          ],
          // 'copy', 'csv', 'excel', 'pdf', 'print'
          lengthMenu: [
            [8, 10, 25, 50, -1],
            [8, 10, 25, 50, "All"],
          ], // Customize the entries per page
        });
        // Optional: Add a custom class to the export buttons for styling
        $(".buttons-csv, .buttons-excel, .buttons-pdf, .buttons-print").addClass(
          "btn btn-primary"
        );
        // Optional: Customize the export filename
        $(".buttons-csv").attr("download", "contactRequest.csv");
      });
    },
    createAccount() {
      this.loading = true;
      axios
        .post("/api/adminregister", this.user)
        .then((response) => {
          console.log(response.data);
          this.loading = false;
          if (response.data.status == "success") {
            $("#myModalCreateUser").modal("hide");
            this.successMessage = "User  Created Successfully.";
            this.errorMessage = null;

            setTimeout(() => {
              this.successMessage = null;
            }, 3000);

            // Push the new subscription to the subscriptions array
            this.users.push(response.data.user);
            this.user.push(response.data.user);
            // this.$router.push('/verify?type=r');
          } else {
            this.error = response.data.message;
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          this.loading = false;
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
    createAccountSetting() {
      this.loading = true;
      if (!this.inviteEmail) {
        this.errors = { email: ["Email is required."] };
        this.loading = false;
        return;
      }

      axios
        .post("/api/invite-user", {
          inviteEmail: this.inviteEmail,
          user_id: localStorage.getItem("user"), // Fetching user_id from localStorage
        })
        .then((response) => {
          console.log("invite", response.data);
          this.loading = false;
          this.inviteEmail = "";
          if (response.data.status == "success") {
            $("#myModalInviteUser").modal("hide");
            this.successMessage = "Send invite user successfully";
            this.errorMessage = null;

            setTimeout(() => {
              this.successMessage = null;
            }, 3000);
          } else {
            this.error = response.data.message;
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          this.loading = false;
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
    UpdateUserAccount() {
      this.loading = true;

      axios
        .put(`/api/adminusers/${this.user.id}`, this.user)
        .then((response) => {
          console.log(response.data);
          this.loading = false;

          if (response.data.status === "success") {
            $("#myModalshowEditUser").modal("hide");
            this.successMessage = "User Updated Successfully.";
            this.errorMessage = null;

            setTimeout(() => {
              this.successMessage = null;
            }, 3000);

            // this.getUsers();
            // Push the new subscription to the subscriptions array
            // this.users.push(response.data.user);
            // this.user.push(response.data.user);

            const index = this.users.findIndex((user) => user.id === this.user.id);
            if (index !== -1) {
              this.$set(this.users, index, response.data.user);
            }

            this.user = {
              id: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              password_confirmation: "",
            };
          } else {
            this.error = response.data.message;
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          this.loading = false;
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(
        () => {
          this.copySuccessMessage = "Link copied to clipboard!";
          setTimeout(() => {
            this.copySuccessMessage = "";
          }, 3000);
        },
        (err) => {
          console.error("Could not copy text:", err);
        }
      );
    },
    CreateKickstaterUserAccount() {
      this.loading = true;

      // Prepare data to send including user ID and is_kickstarter value
      const requestData = {
        id: this.user.id,
        is_kickstarter: this.is_kickstarter ? 1 : 0,
      };

      axios
        .put(`/api/kickstarter/${this.user.id}`, requestData) // Send the updated data
        .then((response) => {
          console.log("kickstart", response.data);
          this.loading = false;

          if (response.data.status === "success") {
            $("#myModalshowKickStarterUser").modal("hide");
            this.successMessage = "User Updated Successfully.";
            this.errorMessage = null;

            const index = this.users.findIndex((user) => user.id === this.user.id);
            if (index !== -1) {
              this.$set(this.users, index, response.data.user);
            }

            // Reset user object
            this.user = {
              id: "",
              is_kickstarter: "",
            };
          } else {
            this.error = response.data.message;
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          this.loading = false;
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },

    // async getUsers() {
    //   axios
    //     .get(`/api/get-users`)
    //     .then((response) => {
    //       console.log("get", response.data.stats.users);
    //       this.users = response.data.stats.users; // Store the retrieved coupons in the data property
    //     //   this.stats = response.data.stats; // Store the retrieved coupons in the data property
    //       console.log("get",  this.stats);
    //       this.stats = {
    //                 total_users,
    //                 active_subscriptions,
    //                 total_subscriptions,
    //                 total_revenue,
    //             };

    //     })
    //     .catch((error) => {
    //       console.error("Error getting coupons:", error);
    //       this.errorMessage = "Error getting coupons"; // Set an error message
    //     });
    // },
    async getUsers() {
      try {
        const response = await axios.get("/api/get-users");
        if (response && response.data && response.data.stats) {
          const {
            stats: {
              users,
              total_users,
              total_admin_count,
              active_subscriptions,
              total_subscriptions,
              total_revenue,
              total_answered,
              total_declined,
              total_expiring_30_days,
              total_expiring_60_days,
              total_expiring_90_days,
              total_expiring_greater_than_90_days,
            },
          } = response.data;
          this.users = response.data.stats.users;
          console.log("user kick", this.users);
          this.initDataTable();
          this.stats = {
            users,
            total_users,
            total_admin_count,
            active_subscriptions,
            total_subscriptions,
            total_revenue,
            total_answered,
            total_declined,
            total_expiring_30_days,
            total_expiring_60_days,
            total_expiring_90_days,
            total_expiring_greater_than_90_days,
          };
          // this.monthlyRevenueData = monthly_revenue;
          // this.renderChart();
        } else {
          console.error("Invalid response format");
          this.errorMessage = "Invalid response format";
        }
      } catch (error) {
        console.error("Error getting data:", error);
        this.errorMessage = "Error getting data";
      }
    },

    initDataTable() {
      this.$nextTick(() => {
        const table = $("#userTable").DataTable({
          pageLength: 8,
          dom: "lBfrtip",
          buttons: [
            {
              extend: "csv",
              text: "Export CSV",
              filename: "user_export",
            },
          ],
          lengthMenu: [
            [8, 10, 25, 50, -1],
            [8, 10, 25, 50, "All"],
          ],
        });

        // Add a custom class to the export buttons for styling
        $(".buttons-csv, .buttons-excel, .buttons-pdf, .buttons-print").addClass(
          "btn btn-primary"
        );

        // Customize the export filename
        $(".buttons-csv").attr("download", "subscriptions.csv");
      });
    },

    updateTable() {
      const table = $("#userTable").DataTable();
      let searchValue = "";

      if (this.selectedFilter === "admin") {
        searchValue = "Admin";
      } else if (this.selectedFilter === "kickstarter") {
        searchValue = "Kickstarter";
      } else if (this.selectedFilter === "regular") {
        searchValue = "User";
      }

      table.column(3).search(searchValue).draw();
    },

    getDurationLabel(durationValue) {
      if (durationValue === "yearly") {
        return "Yearly";
      } else if (durationValue === "quarterly") {
        return "Quarterly";
      }
      // Add more conditions for other duration values if needed
      return "Select Duration";
    },
    updateDiscount() {
      // This method is triggered on each input change
      if (this.discount < 0 || this.discount > 100) {
        this.showDiscountError = true;
      } else {
        this.showDiscountError = false;
      }
    },

    updatePlanDiscount() {
      // Convert the input value to a number
      const discountValue = parseFloat(this.subscriptionData.plansdiscount);

      // Check if the value is within the range [0, 100]
      if (isNaN(discountValue) || discountValue < 0 || discountValue > 100) {
        this.showPlanDiscountError = true;
      } else {
        this.showPlanDiscountError = false;
      }
    },

    showEditCouponModal(couponId) {
      // Fetch coupon details based on the ID and set them to editedCoupon
      // This is just a placeholder; you need to implement the actual logic

      // Assuming you have an array named 'coupons' in your data
      const selectedCoupon = this.coupons.find((coupon) => coupon.id === couponId);

      this.editedCoupon = {
        id: selectedCoupon.id,
        user_id: selectedCoupon.user_id,
        code: selectedCoupon.code,
        discount: selectedCoupon.discount,
        is_active: selectedCoupon.is_active === 1, // Assuming is_active is a boolean
      };

      // Show the modal
      $("#editCouponModal").modal("show");
    },
    showEmailModal(id) {
      this.activeCouponForEmails = id;
      $("#emailModal").modal("show");
    },

    sendEmailModal(id) {
      this.activeCouponForEmails = id;
      $("#sendemailModal").modal("show");
    },
    sendEmailsForPromocode() {
      this.loading = true;
      axios
        .post("/api/send-promocode", {
          coupon_id: this.activeCouponForEmails,
          emails: this.emails,
        })
        .then((response) => {
          if (response.status === 200) {
            $("#emailModal").modal("hide");
            this.emails = " ";
            this.loading = false;
            this.successMessage = "Discount code Emails sent successfully.";
            this.errorMessage = null;

            setTimeout(() => {
              this.successMessage = null;
              // Update the modal ID here
            }, 5000);
          } else {
            this.errorMessage = response.message;
            this.successMessage = null;
          }
        })
        .catch((error) => {
          this.errorMessage = error.response.message;
        });
    },

    sendEmailsForReply() {
      this.loading = true;
      axios
        .post("/api/reply-user", {
          contact_id: this.activeCouponForEmails,
          message: this.message,
        })
        .then((response) => {
          cons;
          if (response.data.status === "success") {
            this.message = ""; // Clear the textarea after successful sending
            this.loading = false;
            this.successMessage = "Reply sent successfully.";
            this.errorMessage = null;
          } else {
            this.errorMessage = response.data.message;
            this.successMessage = null;
            this.loading = false;
          }
          $("#sendemailModal").modal("hide");
        })
        .catch((error) => {
          this.errorMessage = error.response.data.message;
        });
    },

    saveEditedCoupon() {
      // Add logic to save the edited coupon to the server
      // You can use this.editedCoupon to access the edited data
      // After saving, close the modal
      axios
        .post("/api/update-coupons", {
          id: this.editedCoupon.id,
          user_id: this.editedCoupon.user_id,
          code: this.editedCoupon.code,
          discount: this.editedCoupon.discount,
          is_active: this.editedCoupon.is_active,
        })
        .then((response) => {
          console.log("Updated Data:", response.data);
          // Handle success response
          const updatedCouponIndex = this.coupons.findIndex(
            (coupon) => coupon.id === this.editedCoupon.id
          );
          if (updatedCouponIndex !== -1) {
            this.coupons = [
              ...this.coupons.slice(0, updatedCouponIndex),
              {
                id: this.editedCoupon.id,
                code: this.editedCoupon.code,
                discount: this.editedCoupon.discount,
                is_active: this.editedCoupon.is_active,
                created_at: this.coupons[updatedCouponIndex].created_at,
              },
              ...this.coupons.slice(updatedCouponIndex + 1),
            ];
          }

          // Show success message
          this.successMessage = "Coupon Updated Successfully.";

          setTimeout(() => {
            this.getCoupons();
            this.successMessage = null;
          }, 3000);

          // Optionally, you can close the modal or perform other actions
          $("#editCouponModal").modal("hide");
          // Optionally, you can close the modal or perform other actions
        })
        .catch((error) => {
          // Handle error response
          console.error("Error updating coupon:", error.response.data.error);
          console.error("Error updating coupon:", error.response.data.error);

          // Optionally, display an error message to the user
        });
      $("#editCouponModal").modal("hide");
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      // Customize the date format as needed
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      return date.toLocaleDateString("en-US", options);
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      if (this.$route.path != "/") this.$router.push("/");
      else location.reload();
    },
    confirmDelete(couponId) {
      console.log("Coupon ID:", couponId);
      this.deleteCouponId = couponId;
      this.showDeleteConfirmation = true;
    },
    confirmDeleteSubscription(subscriptionId) {
      this.deletesubscriptionId = subscriptionId;
      this.showDeleteConfirmationSubscription = true;
    },

    confirmDeleteUser(userId) {
      console.log("User ID:", userId);
      this.deleteUserId = userId;
      this.showDeleteConfirmationUser = true;
    },

    showCouponCode() {
      this.showCouponCodeModal = true;
    },

    CreateUser() {
      this.CreateUserModal = true;
    },
    InviteUser() {
      this.InviteUserModal = true;
    },
    showEditUser(userId) {
      this.showEditUserModal = true;
      console.log("Edit button clicked with user ID:", userId);

      // Find the user by ID from the users array
      const selectedUser = this.users.find((user) => user.id === userId);

      console.log("selectedUser:", selectedUser);
      if (selectedUser) {
        this.user = {
          id: selectedUser.id,
          firstName: selectedUser.first_name,
          lastName: selectedUser.last_name,
          email: selectedUser.email,
          password: "", // Set password to an empty string or handle differently
          password_confirmation: "", // Set confirmation to an empty string or handle differently
        };

        // Show the modal
        $("#editUserModal").modal("show");
      } else {
        console.error("User not found"); // Log an error if the user isn't found
      }
    },

    showKickStarterUser(userId, actionText) {
      if (actionText === "Remove") {
        this.is_kickstarter = true;
      } else {
        this.is_kickstarter = false;
      }
      this.myModalshowKickStarterUser = true;
      console.log("Kick Start button clicked with user ID:", userId);

      // Find the user by ID from the users array
      const selectedUser = this.users.find((user) => user.id === userId);

      console.log("selectedUser:", selectedUser);
      if (selectedUser) {
        this.user = {
          firstName: selectedUser.first_name,
          lastName: selectedUser.last_name,
          id: selectedUser.id,
          is_kickstarter: selectedUser.is_kickstarter,
          // Set confirmation to an empty string or handle differently
        };

        // Show the modal
        $("#editUserModal").modal("show");
      } else {
        console.error("User not found"); // Log an error if the user isn't found
      }
    },

    showsubscriptionplan(mode) {
      if (mode === "add") {
        // Reset form fields or set defaults for adding a new subscription
        this.subscriptionData = {
          code: "",
          description: "",
          price: null,
          product_id: "",
          price_id: "",
          paypal_product_id: "",
          paypal_price_id: "",
          duration: "yearly",
          is_active: false,
          plansdiscount: "",
          is_kickstarter_plan: "",
          plan_type: "",
        };
      } else if (mode === "edit") {
        // Assuming you have an existing subscription object (subscriptionToEdit)
        // Set the subscription data for editing
        this.subscriptionData = { ...this.subscriptionToEdit };
        // Log subscriptionData to verify its contents
        console.log("subscriptionToEdit", this.subscriptionData);
      }
      this.showsubscriptionplanModal = true;
    },
    showCouponCodeDiscount() {
      this.showCouponCodeDiscountModal = true;
      axios
        .get("/api/coupon-settings")
        .then((response) => {
          // Assuming your API response has a 'coupon' property
          this.discount = response.data.coupon;
        })
        .catch((error) => {
          console.error("Error fetching coupon data:", error);
        });
    },
    cancelcouponmodal() {
      this.showCouponCodeModal = false;
    },
    cancelDelete() {
      this.deleteCouponId = null;
      this.deletesubscriptionId = null;
      this.showDeleteConfirmation = false;
      this.showDeleteConfirmationSubscription = false;
    },
    deleteConfirmed() {
      axios
        .delete(`/api/delete-coupons/${this.deleteCouponId}`)
        .then(() => {
          // Remove the deleted record from the coupons array
          this.coupons = this.coupons.filter(
            (coupon) => coupon.id !== this.deleteCouponId
          );

          // Close the confirmation dialog
          this.cancelDelete();
        })
        .catch((error) => {
          // Handle delete error
          console.error("Error deleting coupon:", error);
          // Optionally show an error message
        });
    },
    deleteConfirmedUser() {
      axios
        .delete(`/api/delete-user/${this.deleteUserId}`)
        .then(() => {
          // Remove the deleted record from the coupons array
          this.users = this.users.filter((user) => user.id !== this.deleteUserId);

          // Close the confirmation dialog
          this.cancelDelete();
        })
        .catch((error) => {
          // Handle delete error
          console.error("Error deleting User:", error);
          // Optionally show an error message
        });
    },
    deleteConfirmedSubscription() {
      axios
        .delete(`/api/delete-subscription/${this.deletesubscriptionId}`)
        .then(() => {
          // Remove the deleted record from the coupons array
          // this.subscriptions = this.subscriptions.subscription.filter(plan => plan.id !== this.deletesubscriptionId);
          const indexToDelete = this.subscriptions.subscription.findIndex(
            (plan) => plan.id === this.deletesubscriptionId
          );

          if (indexToDelete !== -1) {
            this.subscriptions.subscription.splice(indexToDelete, 1);
            // The above line removes one element at the found index
            console.log("Subscription deleted successfully!");
          } else {
            console.log("Subscription ID not found.");
          }

          // Close the confirmation dialog
          this.cancelDelete();
        })
        .catch((error) => {
          // Handle delete error
          console.error("Error deleting coupon:", error);
          // Optionally show an error message
        });
    },

    switchTab(tabNumber) {
      this.activeTab = tabNumber;
    },

    async createCoupon() {
      this.processing = true;

      try {
        const response = await axios.post("/api/coupons", {
          code: this.code,
          selectedUserEmail: this.selectedUserEmail,
          discount: this.discount,
          is_active: this.is_active,
          one_time: this.one_time,
          is_kickstarter_coupon: this.is_kickstarter_coupon ? 1 : 0,
          expiry_date: this.expiry_date,
        });

        console.log("coupon data sent", response.data);

        if (response.data.message === "success") {
          // Close the modal after a successful submission
          $("#myModal").modal("hide");

          this.successMessage = "Coupon added Successfully.";
          this.errorMessage = null;
          this.coupons.push(response.data.coupon);
          this.code = "";
          this.discount = "";
          this.is_active = "";
          this.one_time = "";
          this.selectedUserEmail = "";
          setTimeout(() => {
            this.successMessage = null;
          }, 3000);
        } else {
          this.errorMessage = "Failed to add coupon. Please try again later.";
          setTimeout(() => {
            this.errorMessage = null;
          }, 3000);
          this.successMessage = null;
        }
      } catch (error) {
        if (
          error.response &&
          error.response.status === 422 &&
          error.response.data.errors.code
        ) {
          this.errorMessage = "The coupon code is already taken.";
        } else {
          this.errorMessage = "Failed to add coupon. Please try again later.";
        }
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
        this.successMessage = null;
      } finally {
        this.processing = false;
      }
    },

    showEditSubscriptionModal(subscriptionId) {
      // Fetch coupon details based on the ID and set them to editedCoupon
      // This is just a placeholder; you need to implement the actual logic

      // Assuming you have an array named 'coupons' in your data
      const selectedSubscription = this.subscriptions.subscription.find(
        (plan) => plan.id === subscriptionId
      );

      this.subscriptionData = {
        id: selectedSubscription.id,
        name: selectedSubscription.name,
        description: selectedSubscription.description,
        price: selectedSubscription.price,
        product_id: selectedSubscription.product_id,
        price_id: selectedSubscription.price_id,
        paypal_product_id: selectedSubscription.paypal_product_id,
        paypal_price_id: selectedSubscription.paypal_price_id,
        duration: selectedSubscription.duration,
        best_value: selectedSubscription.best_value,
        plansdiscount: selectedSubscription.plansdiscount,
        is_kickstarter_plan: selectedSubscription.is_kickstarter_plan,
        plan_type: selectedSubscription.plan_type,
      };
      this.calculateDiscountDollars();
      // Show the modal
      https: $("#editSubscriptionModal").modal("show");
    },

    async createSubscription() {
      this.processing = true;

      try {
        const response = await axios.post("/api/save-subscription", {
          // ... (existing code)
          name: this.subscriptionData.name,
          description: this.subscriptionData.description,
          price: this.subscriptionData.price,
          product_id: this.subscriptionData.product_id,
          price_id: this.subscriptionData.price_id,
          paypal_product_id: this.subscriptionData.paypal_product_id,
          paypal_price_id: this.subscriptionData.paypal_price_id,
          duration: this.subscriptionData.duration,
          best_value: this.subscriptionData.best_value,
          plansdiscount: this.subscriptionData.plansdiscount,
          is_kickstarter_plan: this.subscriptionData.is_kickstarter_plan ? 1 : 0,
          plan_type: this.subscriptionData.plan_type,
        });

        if (response.data.message === "success") {
          // Close the modal after a successful submission
          $("#myModalsubscription").modal("hide");
          this.successMessage = "Subscription added Successfully.";
          this.errorMessage = null;

          // Push the new subscription to the subscriptions array
          this.subscriptions.subscription.push(response.data.subscriptionData);

          // Clear form fields
          this.subscriptionData = {
            name: "",
            description: "",
            price: "",
            product_id: "",
            price_id: "",
            paypal_product_id: "",
            paypal_price_id: "",
            duration: "",
            best_value: "",
            plansdiscount: "",
            is_kickstarter_plan: false,
            plan_type: "",
          };

          setTimeout(() => {
            this.successMessage = null;
          }, 3000);
        } else {
          // Handle error message
          this.errorMessage = "Failed to add subscription. Please try again later.";
          setTimeout(() => {
            this.errorMessage = null;
          }, 3000);
          this.successMessage = null;
        }
      } catch (error) {
        // Handle error if API call fails
        this.errorMessage = "Failed to add subscription. Please try again later.";
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
        this.successMessage = null;
      } finally {
        this.processing = false;
      }
    },

    updatesubscriptionplan() {
      axios
        .post("/api/update-subscription", {
          id: this.subscriptionData.id,
          name: this.subscriptionData.name,
          description: this.subscriptionData.description,
          price: this.subscriptionData.price,
          product_id: this.subscriptionData.product_id,
          price_id: this.subscriptionData.price_id,
          paypal_product_id: this.subscriptionData.paypal_product_id,
          paypal_price_id: this.subscriptionData.paypal_price_id,
          duration: this.subscriptionData.duration,
          best_value: this.subscriptionData.best_value,
          plansdiscount: this.subscriptionData.plansdiscount,
          is_kickstarter_plan: this.subscriptionData.is_kickstarter_plan ? 1 : 0,
          plan_type: this.subscriptionData.plan_type,
        })
        .then((response) => {
          console.log("Updated Data:", response);
          // Handle success response
          const updatedSubscriptionIndex = this.subscriptions.subscription.findIndex(
            (plan) => plan.id === this.subscriptionData.id
          );
          console.log("Updated updatedSubscriptionIndex:", updatedSubscriptionIndex);

          if (updatedSubscriptionIndex !== -1) {
            this.subscriptions[updatedSubscriptionIndex] = {
              id: this.subscriptionData.id,
              name: this.subscriptionData.name,
              description: this.subscriptionData.description,
              price: this.subscriptionData.price,
              product_id: this.subscriptionData.product_id,
              price_id: this.subscriptionData.price_id,
              paypal_product_id: this.subscriptionData.paypal_product_id,
              paypal_price_id: this.subscriptionData.paypal_price_id,
              duration: this.subscriptionData.duration,
              best_value: this.subscriptionData.best_value,
              plansdiscount: this.subscriptionData.plansdiscount,
              is_kickstarter_plan: this.subscriptionData.is_kickstarter_plan,
              plan_type: this.subscriptionData.plan_type,
              created_at: this.subscriptions.subscription[updatedSubscriptionIndex]
                .created_at,
            };
          }

          // Show success message
          this.successMessage = "Subscription Updated Successfully.";
          setTimeout(() => {
            this.getsubscriptionplans();
          }, 1000);
          setTimeout(() => {
            this.successMessage = null;
          }, 3000);

          // Optionally, you can close the modal or perform other actions
          $("#editSubscriptionModal").modal("hide");
          // Optionally, you can close the modal or perform other actions
        })
        .catch((error) => {
          // Handle error response
          // console.error('Error updating coupon:', error.response.data.error);
          // Optionally, display an error message to the user
        });
      // $('#editSubscriptionModal').modal('hide');
    },
    async SaveCoupon() {
      this.processing = true;

      try {
        const response = await axios.post("/api/save-coupon", {
          discount: this.discount,
        });
        console.log(response.data.message);
        if (response.data.message === "success") {
          // Close the modal after a successful submission
          $("#myModalDiscount").modal("hide");
          this.successMessage = "Add Registration Discount Successfully.";
          this.errorMessage = null;
          this.discount = "";
          setTimeout(() => {
            this.successMessage = null;
          }, 3000);
        } else {
          this.errorMessage = "Failed to add coupon. Please try again later.";
          setTimeout(() => {
            this.errorMessage = null;
          }, 3000);
          this.successMessage = null;
        }
      } catch (error) {
        this.errorMessage = "The code has already been taken.";
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
        this.successMessage = null;
      } finally {
        this.processing = false;
      }
    },
    async UpdateSetting() {
      this.processing = true;
      this.errorMessage = null;

      if (!this.fromemail.trim()) {
        this.errorMessage = "The From Email is required";
        this.processing = false;
        return;
      }

      try {
        const response = await axios.post("/api/update-setting", {
          fromemail: this.fromemail,
        });
        console.log("status", response.data.status);
        if (response.data.status === "success") {
          setTimeout(() => {
            this.successMessage = null;
          }, 3000);
          this.successMessage = "Setting Update Successfully";
        } else {
          this.errorMessage = "The From Email is required";
          setTimeout(() => {
            this.errorMessage = null;
          }, 3000);
          this.successMessage = null;
        }
      } catch (error) {
        this.errorMessage = "sn.";
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
        this.successMessage = null;
      } finally {
        this.processing = false;
      }
    },
    async getCoupons() {
      axios
        .get(`/api/get-coupons`)
        .then((response) => {
          console.log(response.status);
          this.coupons = response.data; // Store the retrieved coupons in the data property
          //   this.initDataTableCoupons();
        })
        .catch((error) => {
          console.error("Error getting coupons:", error);
          this.errorMessage = "Error getting coupons"; // Set an error message
        });
    },
    // initDataTableCoupons() {
    //   this.$nextTick(() => {
    //     const table = $("#discountTable").DataTable({
    //       // DataTable options/configuration
    //       pageLength: 8,
    //       dom: "lBfrtip", // Include 'l' for length menu
    //       buttons: [
    //         {
    //           extend: "csv",
    //           text: "Export CSV", // Set a custom label for the CSV button
    //           filename: "discount_export", // Set a custom filename for CSV
    //         },
    //       ],
    //       // 'copy', 'csv', 'excel', 'pdf', 'print'
    //       lengthMenu: [
    //         [8, 10, 25, 50, -1],
    //         [8, 10, 25, 50, "All"],
    //       ], // Customize the entries per page
    //     });
    //     // Optional: Add a custom class to the export buttons for styling
    //     $(".buttons-csv, .buttons-excel, .buttons-pdf, .buttons-print").addClass(
    //       "btn btn-primary"
    //     );
    //     // Optional: Customize the export filename
    //     $(".buttons-csv").attr("download", "subscriptions.csv");
    //     // $('.buttons-excel').attr('download', 'subscriptions.xlsx');
    //   });
    // },

    bitcoinTransactionTable() {
      this.$nextTick(() => {
        const table = $("#bitcoinTransactionTable").DataTable({
          // DataTable options/configuration
          pageLength: 8,
          dom: "lBfrtip", // Include 'l' for length menu
          buttons: [
            {
              extend: "csv",
              text: "Export CSV", // Set a custom label for the CSV button
              filename: "transaction_export", // Set a custom filename for CSV
            },
          ],
          // 'copy', 'csv', 'excel', 'pdf', 'print'
          lengthMenu: [
            [8, 10, 25, 50, -1],
            [8, 10, 25, 50, "All"],
          ], // Customize the entries per page
        });
        // Optional: Add a custom class to the export buttons for styling
        $(".buttons-csv, .buttons-excel, .buttons-pdf, .buttons-print").addClass(
          "btn btn-primary"
        );
        // Optional: Customize the export filename
        $(".buttons-csv").attr("download", "subscriptions.csv");
        // $('.buttons-excel').attr('download', 'subscriptions.xlsx');
      });
    },
    async getsubscriptionplans() {
      const user = localStorage.getItem("user");
      axios
        .get(`/api/get-subscription-plans`)
        .then((response) => {
          console.log("unique", response.data.fromemail);
          this.subscriptions = response.data;
          console.log("subscription", this.subscriptions); // Store the retrieved coupons in the data property
          this.usersubscription = response.data.usersubscription; // Store the retrieved coupons in the data property
          console.log("usersubscription", this.usersubscription);
          this.initDatasubscriptionsTable();
          this.fromemail = response.data.fromemail;
          this.initDataSubscriptionPlanTable();
          console.log("subscription", this.subscriptions);
        })
        .catch((error) => {
          console.error("Error getting coupons:", error);
          this.errorMessage = "Error getting coupons"; // Set an error message
        });
    },

    async updateSubscriptionData() {
      const user = localStorage.getItem("user");
      axios
        .get(`/api/get-subscription-plans?type=${this.filterSubscription}`)
        .then((response) => {
          this.subscriptions = response.data; // Store the retrieved coupons in the data property
          this.usersubscription = response.data.usersubscription; // Store the retrieved coupons in the data property

          console.log("usersubscription", this.usersubscription);

          this.initDatasubscriptionsTable();
          this.initDataSubscriptionPlanTable();
        })
        .catch((error) => {
          console.error("Error getting coupons:", error);
          this.errorMessage = "Error getting coupons"; // Set an error message
        });
    },
    initDatasubscriptionsTable() {
      this.$nextTick(() => {
        const tableElement = $("#subscriptionsTable");

        // Check if the DataTable is already initialized and destroy it if it is
        if ($.fn.DataTable.isDataTable(tableElement)) {
          tableElement.DataTable().destroy();
        }

        // Reinitialize the DataTable
        tableElement.DataTable({
          // DataTable options/configuration
          pageLength: 8,
          dom: "lBfrtip", // Include 'l' for length menu
          buttons: [
            {
              extend: "csv",
              text: "Export CSV", // Set a custom label for the CSV button
              filename: "subscriptions_export", // Set a custom filename for CSV
            },
          ],
          lengthMenu: [
            [8, 10, 25, 50, -1],
            [8, 10, 25, 50, "All"],
          ], // Customize the entries per page
        });

        // Optional: Add a custom class to the export buttons for styling
        $(".buttons-csv, .buttons-excel, .buttons-pdf, .buttons-print").addClass(
          "btn btn-primary"
        );
        // Optional: Customize the export filename
        $(".buttons-csv").attr("download", "subscriptions.csv");
      });
    },

    initDataSubscriptionPlanTable() {
      this.$nextTick(() => {
        const tableElement = $("#subscriptionPlanTable");

        // Check if the DataTable is already initialized and destroy it if it is
        if ($.fn.DataTable.isDataTable(tableElement)) {
          tableElement.DataTable().destroy();
        }

        // Reinitialize the DataTable
        tableElement.DataTable({
          pageLength: 8,
          dom: "lBfrtip", // Include 'l' for length menu
          buttons: [
            {
              extend: "csv",
              text: "Export CSV", // Set a custom label for the CSV button
              filename: "subscriptionsPlan_export", // Set a custom filename for CSV
            },
          ],
          lengthMenu: [
            [8, 10, 25, 50, -1],
            [8, 10, 25, 50, "All"],
          ], // Customize the entries per page
        });

        $(".buttons-csv, .buttons-excel, .buttons-pdf, .buttons-print").addClass(
          "btn btn-primary"
        );
        // Optional: Customize the export filename
        $(".buttons-csv").attr("download", "subscriptions.csv");
      });
    },
    UpdateUserInfo() {
      const authToken = "Bearer " + localStorage.getItem("token"); // Replace with your storage method
      // Check if passwords match before making the API request
      if (this.user.password !== this.user.password_confirmation) {
        this.passwordsDoNotMatch = true;
        return;
      }
      // Clear the error message if passwords match
      this.passwordsDoNotMatch = false;

      // Make the API request
      axios
        .put(
          "/api/user/update",
          {
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            password: this.user.password,
            password_confirmation: this.user.password_confirmation,
          },
          {
            headers: {
              Authorization: authToken,
            },
          }
        )
        .then((response) => {
          // Handle success, show a success message or redirect
          this.successMessage = "User Account updated Successfully.";
          this.user.password = ""; // Clear the password field
          this.user.password_confirmation = ""; // Clear the password confirmation field
          setTimeout(() => {
            this.successMessage = null;
          }, 3000);
        })
        .catch((error) => {
          // Handle error, show an error message or log the error
          console.error("Error updating user:", error);
          this.errorMessage = "The password field must be at least 8 characters";
          setTimeout(() => {
            this.errorMessage = null;
          }, 3000);
        });
    },
  },
  watch: {
    // Reset the error message when the user updates the password or confirmation
    "user.password": function () {
      this.passwordsDoNotMatch = false;
    },
    "user.password_confirmation": function () {
      this.passwordsDoNotMatch = false;
    },
  },
  computed: {
    formattedCreatedAt() {
      return moment(this.created_at).format("MMMM Do YYYY, h:mm:ss a");
    },
    mappedIsActiveValue() {
      return this.is_active ? 1 : 0;
    },
    filteredUsers() {
      if (this.selectedFilter === "all") {
        return this.users;
      } else if (this.selectedFilter === "admin") {
        return this.users.filter((user) => user.is_admin === 1);
      } else if (this.selectedFilter === "kickstarter") {
        return this.users.filter((user) => user.is_kickstarter === 1);
      } else if (this.selectedFilter === "regular") {
        return this.users.filter(
          (user) => user.is_admin === 0 && user.is_kickstarter === 0
        );
      }
    },
    filteredTransactions() {
      if (this.filterStatus === "all") {
        return this.transactions;
      } else {
        return this.transactions.filter(
          (transaction) => transaction.btc_verify == this.filterStatus
        );
      }
    },
  },
};
</script>
<style scoped>
/**
 * Fonts
 */

@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap'); */

.site-wrapper {
  padding-top: 300px;
}
.copy-link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.input-feild-style {
  width: 129px !important;
  height: 33px !important;
  border: 2px solid #4472c4 !important;
  border-radius: 5px !important;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  color: white;
}

.success-mesage {
  color: green;
  padding-top: 20px;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

::placeholder {
  color: white !important;
  opacity: 1;
  /* Firefox */
}

::-ms-input-placeholder {
  /* Edge 12-18 */
  color: white !important;
}

:-ms-input-placeholder {
  /* Edge 19+ */
  color: white !important;
}

/* Chrome, Safari, and Opera */
input::placeholder {
  color: white !important;
}

/**
 * Article Block
 */
.article-block {
  text-align: center;
}

.article-block .entry-content > p {
  color: #666;
}

/**
 * Tabs Container
 */
.tabs-container {
  padding: 2rem;
}

/**
 * Tabs Block
 */
.tabs-block {
  display: flex;
  align-items: center;
  justify-content: center;
}

/**
 * Tabs
 */
.tabs {
  display: flex;
}

.tabs > ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 15%;
}

.tabs > ul li {
  display: block;
}

.tabs > ul li:not(:last-child) {
  border-bottom: 1px solid #262626;
}

.tabs > ul li a,
.tabs > ul li a:visited {
  display: flex;
  border-bottom: none;
  text-decoration: none;
  background-color: #cae7f7;
  color: black;
  padding: 1rem 1.5rem;
  transition: all 0.2s ease-in-out;
  word-wrap: break-word;
  cursor: pointer;
}

.tabs > ul li a:hover,
.tabs > ul li a:focus,
.tabs > ul li a:active {
  border-bottom: none;
  outline: 0;
}

.tabs > ul li a.active {
  background-color: #000;
  color: white;
}

.tabs > ul li a:hover:not(.active) {
  color: #0067b8;
}

.tabs > ul li a > span {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.tabs > ul li a > span.tab-label {
  display: none;
}

.tabs section {
  width: 85%;
  background-color: #fff;
  padding: 1rem;
  display: none;
  word-wrap: break-word;
  border-bottom: 6px solid #0067b8;
}

.tabs section > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.2s, transform 0.2s;
}

.tabs section > *:nth-child(1) {
  transition-delay: 0.2s;
}

.tabs section > *:nth-child(2) {
  transition-delay: 0.3s;
}

.tabs section > *:nth-child(3) {
  transition-delay: 0.4s;
}

.tabs section > *:nth-child(4) {
  transition-delay: 0.5s;
}

.tabs section > *:nth-child(5) {
  transition-delay: 0.6s;
}

.tabs section > *:nth-child(6) {
  transition-delay: 0.7s;
}

.tabs section > *:nth-child(7) {
  transition-delay: 0.8s;
}

.tabs section > *:nth-child(8) {
  transition-delay: 0.9s;
}

.tabs section > *:nth-child(9) {
  transition-delay: 1s;
}

.tabs section > *:nth-child(10) {
  transition-delay: 1.1s;
}

.tabs section > *:nth-child(11) {
  transition-delay: 1.2s;
}

.tabs section > *:nth-child(12) {
  transition-delay: 1.3s;
}

.tabs section > *:nth-child(13) {
  transition-delay: 1.4s;
}

.tabs section > *:nth-child(14) {
  transition-delay: 1.5s;
}

.tabs section > *:nth-child(15) {
  transition-delay: 1.6s;
}

.tabs section > *:nth-child(16) {
  transition-delay: 1.7s;
}

.tabs section > *:nth-child(17) {
  transition-delay: 1.8s;
}

.tabs section > *:nth-child(18) {
  transition-delay: 1.9s;
}

.tabs section > *:nth-child(19) {
  transition-delay: 2s;
}

.tabs section > *:nth-child(20) {
  transition-delay: 2.1s;
}

.tabs section.active {
  display: block;
}

.tabs section.active-content > * {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 576px) {
  .tabs > ul {
    width: 150px;
  }

  .tabs > ul li a {
    flex-wrap: wrap;
  }

  .tabs > ul li a > span {
    width: 100%;
  }

  .tabs > ul li a > span.tab-label {
    width: 100%;
    display: block;
    margin-top: 0.2rem;
  }

  .tabs section {
    width: calc(100% - 150px);
    padding: 0rem 1rem;
  }
}

@media (min-width: 768px) {
  body {
    font-size: 1.125rem;
  }

  .tabs-container {
    padding: 4rem 4rem;
  }
}

@media (min-width: 992px) {
  .tabs {
    width: 1200px;
  }
}

.modal-header {
  display: block !important;
}

.form-control {
  background-color: #4472c4 !important;
}

.hr_line {
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  border: 0 !important;
  border-top: 2px solid rgb(0 0 0 / 38%) !important;
}

.bg-white {
  background-color: white;
}

.text-danger {
  color: #dc3545 !important;
  font-size: 15px;
}

.text-white {
  color: white !important;
  font-size: 15px;
}
.user-text-black {
  color: black;
  font-weight: 500;
  font-size: 18px;
}
.user-number-black {
  color: black;
  /* font-weight: 700; */
}
div.dataTables_wrapper div.dataTables_filter input {
  background-color: #4472c4 !important;
}

.badge-success {
  background-color: #28a745;
  color: white;
}

.badge-danger {
  background-color: #dc3545;
  color: white;
}

.alert {
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
}

.table-responsive {
  margin-top: 20px;
}
</style>
